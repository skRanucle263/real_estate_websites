'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

const meetups = [
  {
    id: 1,
    title: 'Morning Yoga in the Park',
    description: 'Join us for an energizing morning yoga session in Central Park. All skill levels welcome!',
    date: '2024-04-18',
    time: '7:00 AM',
    location: 'Central Park, New York',
    category: 'Yoga',
    attendees: 25,
    maxAttendees: 30,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Weekend Trail Running',
    description: 'Explore scenic trails with fellow runners. Perfect for intermediate runners looking for a challenge.',
    date: '2024-04-20',
    time: '8:00 AM',
    location: 'Riverside Trail',
    category: 'Running',
    attendees: 15,
    maxAttendees: 20,
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Group HIIT Workout',
    description: 'High-intensity interval training session led by professional trainers. Get ready to sweat!',
    date: '2024-04-22',
    time: '6:00 PM',
    location: 'FitTrack Gym',
    category: 'HIIT',
    attendees: 18,
    maxAttendees: 25,
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function MeetupsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Fitness Meetups</h1>
          <div className="grid gap-8">
            {meetups.map((meetup) => (
              <Card key={meetup.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={meetup.image}
                      alt={meetup.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{meetup.category}</Badge>
                        <Badge variant="outline">
                          <Users className="w-4 h-4 mr-1" />
                          {meetup.attendees}/{meetup.maxAttendees}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{meetup.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {meetup.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                      <p className="text-muted-foreground">{meetup.description}</p>
                      <div className="flex items-center mt-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{meetup.date} at {meetup.time}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button>Join Meetup</Button>
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