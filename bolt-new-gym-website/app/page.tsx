'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Droplets, Footprints, Brain, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Fitness Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-6">Transform Your Life with Smart Fitness Tracking</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Track your fitness journey, monitor your progress, and achieve your health goals with our comprehensive tracking system.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Track Everything That Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Activity className="w-10 h-10" />}
              title="Calorie Tracking"
              description="Monitor your daily calorie intake and expenditure with precision"
            />
            <FeatureCard
              icon={<Droplets className="w-10 h-10" />}
              title="Water Intake"
              description="Stay hydrated with our smart water intake tracking system"
            />
            <FeatureCard
              icon={<Footprints className="w-10 h-10" />}
              title="Step Counter"
              description="Track your daily steps and active minutes automatically"
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10" />}
              title="Stress Monitor"
              description="Keep track of your mental wellbeing with our stress scale"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Personal Health Dashboard</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
              alt="Dashboard Preview"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}