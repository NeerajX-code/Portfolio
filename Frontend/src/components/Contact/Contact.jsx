import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Contact.scss";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [cooldown, setCooldown] = useState(false);
    const cooldownTimer = useRef(null);

    const onSubmit = async (data) => {
        if (cooldown) {
            toast.error("Please wait before sending again ⏳");
            return;
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, data);

            if (res.status === 200) {
                toast.success("Message sent successfully 🚀");
                reset();

                // 🔒 Start cooldown (5s)
                setCooldown(true);
                cooldownTimer.current = setTimeout(() => {
                    setCooldown(false);
                }, 5000);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message ❌");
        }
    };

    React.useEffect(() => {
        return () => {
            if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
        };
    }, []);

    return (
        <section id="contact" className="contact">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Let’s Work Together
            </motion.h2>

            {/* Form */}
            <motion.form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    variants={itemVariants}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <motion.input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                    })}
                    variants={itemVariants}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <motion.textarea
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    variants={itemVariants}
                />
                {errors.message && <p className="error">{errors.message.message}</p>}

                <motion.button
                    type="submit"
                    disabled={isSubmitting || cooldown}
                    variants={itemVariants}
                    whileHover={{
                        y: -3,
                        boxShadow: "0 6px 20px rgba(139, 92, 246, 0.4)",
                        transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{
                        y: 0,
                        boxShadow: "0 2px 8px rgba(139, 92, 246, 0.2)",
                        transition: { duration: 0.2 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {isSubmitting
                        ? "Sending..."
                        : cooldown
                            ? "Please wait ⏳"
                            : "Send Message"}
                </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
                className="contact-info"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.a href="mailto:neerajrathore2090@gmail.com" variants={itemVariants}>
                    <FiMail /> neerajrathore2090@gmail.com
                </motion.a>
                <motion.a
                    href="https://github.com/NeerajX-code/"
                    target="_blank"
                    rel="noreferrer"
                    variants={itemVariants}
                >
                    <FiGithub /> GitHub
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/neeraj-rathore-467828378/"
                    target="_blank"
                    rel="noreferrer"
                    variants={itemVariants}
                >
                    <FiLinkedin /> LinkedIn
                </motion.a>
            </motion.div>
        </section>
    );
}

export default Contact;
