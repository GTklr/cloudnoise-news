import { motion } from "framer-motion";

const animationConfiguration = {
    initial: {  scale: 0.5, opacity: 0} ,
    animate: { scale: 1, opacity: 1 },
    exit: { opacity: 0 },
};


const TransitionsZoom = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            
        >
            {children}
        </motion.div>
    );
};
export default TransitionsZoom;

