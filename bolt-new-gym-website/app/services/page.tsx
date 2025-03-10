"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Dumbbell, Cog as Yoga, Minimize as Swimming, Bike, Box as Boxing, Sparkles, Users, Shield } from 'lucide-react'

const services = [
    {
        icon: <Yoga className="h-12 w-12" />,
        title: "Yoga Classes",
        description: "Find inner peace and improve flexibility with our expert-led yoga sessions",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Dumbbell className="h-12 w-12" />,
        title: "Gym & Fitness",
        description: "State-of-the-art equipment and personalized training programs",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Swimming className="h-12 w-12" />,
        title: "Swimming",
        description: "Indoor heated pool with professional swimming instruction",
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Bike className="h-12 w-12" />,
        title: "Cycling",
        description: "High-energy spinning classes with certified instructors",
        image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Boxing className="h-12 w-12" />,
        title: "Boxing",
        description: "Learn boxing techniques and improve your fitness",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Sparkles className="h-12 w-12" />,
        title: "Aerial Yoga",
        description: "Unique anti-gravity yoga experience for all levels",
        image: "https://images.unsplash.com/photo-1620111898665-1e241ef5323d?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Users className="h-12 w-12" />,
        title: "Group Training",
        description: "Motivating group workouts for better results",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Shield className="h-12 w-12" />,
        title: "Self Defense",
        description: "Learn practical self-defense techniques",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80"
    }
]

export default function ServicesPage() {
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
                            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Discover our comprehensive range of fitness and wellness services designed to help you achieve your health goals.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-card rounded-lg overflow-hidden border"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4 text-primary">{service.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground mb-4">{service.description}</p>
                                        <Link href="/contact">
                                            <Button className="w-full">Learn More</Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 bg-muted/50">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join our community and transform your life with our expert guidance and support.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Link href="/register">
                                    <Button size="lg">Get Started</Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg">Contact Us</Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}