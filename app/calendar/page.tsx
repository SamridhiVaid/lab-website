import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Calendar() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Calendar</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Office Hours</CardTitle>
            <CardDescription>Winter 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tuesday: 2:00 PM - 3:30 PM</li>
              <li>Thursday: 2:00 PM - 3:30 PM</li>
              <li>Or by appointment</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">Research Group Meeting</h3>
              <p className="text-sm text-muted-foreground">Every Wednesday, 10:00 AM - 11:30 AM</p>
              <p className="text-sm text-muted-foreground">Location: ATH 3-41</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

