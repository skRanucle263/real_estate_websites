'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'Nutrition Fundamentals',
    description: 'Learn the basics of proper nutrition and how it affects your fitness journey.',
    date: '2024-04-15',
    time: '10:00 AM EST',
    speaker: 'Dr. Sarah Johnson',
    category: 'Nutrition',
    spots: 50,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Effective Home Workouts',
    description: 'Master the art of working out effectively from the comfort of your home.',
    date: '2024-04-20',
    time: '2:00 PM EST',
    speaker: 'Mike Thompson',
    category: 'Fitness',
    spots: 100,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Mental Health & Fitness',
    description: 'Understanding the connection between mental health and physical fitness.',
    date: '2024-04-25',
    time: '11:00 AM EST',
    speaker: 'Dr. Emily Chen',
    category: 'Wellness',
    spots: 75,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function WebinarsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/50 py-12">
      <div className="container mx-auto px-4 mb-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Upcoming Webinars</h1>
          <div className="grid gap-8">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{webinar.category}</Badge>
                        <Badge variant="outline">
                          <Users className="w-4 h-4 mr-1" />
                          {webinar.spots} spots
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{webinar.title}</CardTitle>
                      <CardDescription>by {webinar.speaker}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                      <p className="text-muted-foreground">{webinar.description}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{webinar.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{webinar.time}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button>Register Now</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}