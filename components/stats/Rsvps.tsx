import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailCheck } from 'lucide-react';

const Rsvps = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total RSVPs
        </CardTitle>
        <MailCheck className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">50</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last { }
        </p>
      </CardContent>
    </Card>
  )
}

export default Rsvps;