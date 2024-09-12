import React, { useRef, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 50;
const DEFAULT_DISTANCE = 140;
const MOBILE_MAGNIFICATION = 40;
const MOBILE_DISTANCE = 80;

const dockVariants = cva(
    "mx-auto w-max mt-0 h-[46px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md",
);

const Dock = React.forwardRef(
    (
        {
            className,
            children,
            magnification = DEFAULT_MAGNIFICATION,
            distance = DEFAULT_DISTANCE,
            direction = "bottom",
            ...props
        },
        ref,
    ) => {
        const [isMobile, setIsMobile] = useState(false);
        const mouseX = useMotionValue(Infinity);

        useEffect(() => {
            const checkMobile = () => {
                setIsMobile(window.innerWidth < 780); // Adjust this breakpoint as needed
            };

            checkMobile();
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
        }, []);

        const renderChildren = () => {
            return React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    mouseX: mouseX,
                    magnification: isMobile
                        ? MOBILE_MAGNIFICATION
                        : magnification,
                    distance: isMobile ? MOBILE_DISTANCE : distance,
                });
            });
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                {...props}
                className={cn(dockVariants({ className }), {
                    "items-start": direction === "top",
                    "items-center": direction === "middle",
                    "items-end": direction === "bottom",
                    "h-[36px]": isMobile, // Reduce height for mobile
                })}
            >
                {renderChildren()}
            </motion.div>
        );
    },
);

Dock.displayName = "Dock";

const DockIcon = ({
    size,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    mouseX,
    className,
    children,
    ...props
}) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 769); // Adjust this breakpoint as needed
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const distanceCalc = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };
        return val - bounds.x - bounds.width / 2;
    });

    const mobileDistance = isMobile ? MOBILE_DISTANCE : distance;
    const mobileMagnification = isMobile ? MOBILE_MAGNIFICATION : magnification;

    let widthSync = useTransform(
        distanceCalc,
        [-mobileDistance, 0, mobileDistance],
        [30, mobileMagnification, 30],
    );
    let width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-full",
                className,
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
