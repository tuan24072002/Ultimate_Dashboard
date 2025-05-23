import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "./ui/badge";

interface Props {
  title: "Latest Transactions"
}

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  }
];
const CardList = ({ title }: Props) => {
  const list = latestTransactions
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-auto">
        {
          list
            .sort((a, b) => b.count - a.count)
            .map(item => (
              <Card key={item.id} className="flex-row flex-wrap items-center gap-4 p-4">
                <CardHeader className="size-12 rounded-sm relative overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  <Badge variant="outline">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
              </Card>
            ))
        }
      </div>
    </div>
  )
}

export default CardList