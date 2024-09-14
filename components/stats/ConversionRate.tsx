import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Percent } from 'lucide-react';

const ConversionRate = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
        <Percent className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">60%</div>
        <p className="text-xs text-muted-foreground">
          +19% from last month
        </p>
      </CardContent>
    </Card>
  )
}

export default ConversionRate