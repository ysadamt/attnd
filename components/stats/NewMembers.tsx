import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus } from 'lucide-react';

const NewMembers = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          New Members
        </CardTitle>
        <UserPlus className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">10</div>
        <p className="text-xs text-muted-foreground">
          +180.1% from last month
        </p>
      </CardContent>
    </Card>
  )
}

export default NewMembers;