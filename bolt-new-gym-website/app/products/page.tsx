"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

const products = [
    {
        name: "Premium Yoga Mat",
        price: 49.99,
        description: "High-quality, non-slip yoga mat perfect for all types of yoga",
        image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Resistance Bands Set",
        price: 29.99,
        description: "Complete set of resistance bands for strength training",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Smart Water Bottle",
        price: 39.99,
        description: "Track your hydration with our smart water bottle",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Fitness Tracker",
        price: 99.99,
        description: "Advanced fitness tracking for all your activities",
        image: "https://images.unsplash.com/photo-1557935728-e6d1684e0944?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Workout Gloves",
        price: 24.99,
        description: "Protective gloves for weightlifting and training",
        image: "https://images.unsplash.com/photo-1583473848882-f195d4f1c950?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Protein Powder",
        price: 54.99,
        description: "Premium whey protein for muscle recovery",
        image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80"
    }
]

export default function ProductsPage() {
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
                            <h1 className="text-4xl font-bold mb-6">Fitness Products</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                High-quality fitness equipment and accessories to support your wellness journey.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-card rounded-lg overflow-hidden border"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                        <p className="text-muted-foreground mb-4">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold">${product.price}</span>
                                            <Button>
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}