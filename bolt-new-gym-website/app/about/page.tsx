"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 px-4 bg-muted/50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold mb-6">About FitLife</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                We're dedicated to helping people live healthier, more active lives through technology and community.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    At FitLife, we believe that everyone deserves access to the tools and knowledge needed to live a healthy lifestyle.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    Our platform combines cutting-edge technology with proven fitness and wellness principles to help you achieve your health goals.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative h-[400px] rounded-lg overflow-hidden"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80"
                                    alt="Our Mission"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 bg-muted/50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Meet the passionate individuals behind FitLife who are committed to your wellness journey.
                            </p>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <TeamMember
                                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
                                name="John Smith"
                                role="Founder & CEO"
                            />
                            <TeamMember
                                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                                name="Sarah Johnson"
                                role="Head of Fitness"
                            />
                            <TeamMember
                                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                                name="Mike Williams"
                                role="Tech Lead"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function TeamMember({ image, name, role }: { image: string, name: string, role: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg overflow-hidden"
        >
            <div className="relative h-64">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-muted-foreground">{role}</p>
            </div>
        </motion.div>
    )
}