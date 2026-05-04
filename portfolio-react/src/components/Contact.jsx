import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

const ContactModal = ({ isOpen, onClose, handleSubmit, isSending, status }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div id="contactModal" className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Blurry Backdrop Overlay */}
            <div 
                className="absolute inset-0 bg-dark/40 backdrop-blur-sm transition-all duration-500" 
                onClick={onClose}
            ></div>
            
            {/* Professional Modal Structure - NO BLUR HERE */}
            <div className="modal-content relative bg-[#0d0d0d] border border-white/10 p-8 md:p-10 w-full max-w-md shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <h2 className="text-2xl font-bold mb-2 text-left text-white">Send a Message</h2>
                <p className="text-white/40 text-xs font-mono mb-8 text-left uppercase tracking-widest">Available for new opportunities</p>
                
                <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                            type="text" 
                            name="user_name" 
                            required 
                            placeholder="Your name"
                            className="w-full bg-white/5 border border-white/5 p-3.5 text-sm text-white focus:border-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/10" 
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Email</label>
                            <input 
                                type="email" 
                                name="user_email" 
                                required 
                                placeholder="your@email.com"
                                className="w-full bg-white/5 border border-white/5 p-3.5 text-sm text-white focus:border-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/10" 
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Mobile</label>
                            <input 
                                type="tel" 
                                name="user_mobile" 
                                required 
                                placeholder="+91..."
                                className="w-full bg-white/5 border border-white/5 p-3.5 text-sm text-white focus:border-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/10" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Message</label>
                        <textarea 
                            name="message" 
                            required 
                            rows="4" 
                            placeholder="How can I help you?"
                            className="w-full bg-white/5 border border-white/5 p-3.5 text-sm text-white focus:border-accent focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/10"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSending} 
                        className="w-full py-4 bg-accent hover:bg-accent-soft text-dark font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center group"
                    >
                        <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                        {!isSending && (
                            <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        )}
                    </button>
                    
                    {status.text && (
                        <p className={`text-center text-[10px] font-mono mt-4 py-2 border ${status.type === 'error' ? 'border-red-500/50 text-red-400' : 'border-accent/50 text-accent'}`}>
                            {status.text}
                        </p>
                    )}
                </form>
            </div>
        </div>,
        document.body
    );
};

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ text: '', type: '' });

    const toggleModal = (show) => {
        if (show) {
            setIsModalOpen(true);
            document.body.classList.add('modal-open');
            setTimeout(() => {
                gsap.fromTo('#contactModal .modal-content', 
                    { opacity: 0, scale: 0.95, y: 30 }, 
                    { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power4.out' }
                );
            }, 10);
        } else {
            gsap.to('#contactModal .modal-content', { 
                opacity: 0, 
                scale: 0.95, 
                y: 30, 
                duration: 0.4, 
                ease: 'power4.in',
                onComplete: () => {
                    setIsModalOpen(false);
                    document.body.classList.remove('modal-open');
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ text: '', type: '' });

        // EmailJS Credentials from .env
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                setStatus({ text: 'Success! I will get back to you shortly.', type: 'success' });
                e.target.reset();
                setTimeout(() => toggleModal(false), 2500);
            }, (error) => {
                console.error('FAILED...', error);
                setStatus({ text: 'Error sending message. Please try again.', type: 'error' });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-48 px-6 md:px-24 border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-accent font-mono text-xs mb-4 uppercase tracking-[0.3em] reveal-on-scroll">// GET IN TOUCH</p>
                <h2 className="text-5xl md:text-7xl font-black mb-12 reveal-on-scroll delay-100">Let's work together.</h2>
                <p className="text-white/50 text-xl mb-16 max-w-xl mx-auto reveal-on-scroll delay-200">
                    Currently open to full-time roles or freelance projects. I'd love to hear about what you're building.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 reveal-on-scroll delay-300">
                    <button
                        onClick={() => toggleModal(true)}
                        className="px-10 py-5 bg-accent hover:bg-accent-soft text-dark font-bold text-sm uppercase tracking-widest transition-all duration-300"
                    >
                        Email Me
                    </button>
                </div>
            </div>

            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => toggleModal(false)}
                handleSubmit={handleSubmit}
                isSending={isSending}
                status={status}
            />
        </section>
    );
};

export default Contact;
