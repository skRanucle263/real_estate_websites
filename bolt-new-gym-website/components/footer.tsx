import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">FitLife</h3>
                        <p className="text-muted-foreground">
                            Your comprehensive platform for fitness tracking and healthy lifestyle management.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                            <li><Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Community</h4>
                        <ul className="space-y-2">
                            <li><Link href="/webinars" className="text-muted-foreground hover:text-foreground">Webinars</Link></li>
                            <li><Link href="/meetups" className="text-muted-foreground hover:text-foreground">Meet-ups</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                            <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} FitLife. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}