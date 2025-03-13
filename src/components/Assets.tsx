import { T } from "@/components/T";
import {
  BarChart3,
  Building,
  Coins,
  PiggyBank,
  BarChartHorizontal,
  Users,
  Gem,
} from "lucide-react";

const assets = [
  {
    id: "stocks",
    icon: <BarChart3 className="h-8 w-8" />,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
  },
  {
    id: "real_estate",
    icon: <Building className="h-8 w-8" />,
    color: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300",
  },
  {
    id: "crypto",
    icon: <Coins className="h-8 w-8" />,
    color:
      "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
  },
  {
    id: "savings",
    icon: <PiggyBank className="h-8 w-8" />,
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
  },
  {
    id: "startups",
    icon: <BarChartHorizontal className="h-8 w-8" />,
    color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
  },
  {
    id: "crowdlending",
    icon: <Users className="h-8 w-8" />,
    color:
      "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
  },
];

export const Assets = () => {
  return (
    <section id="assets" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T id="assets_title" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <T id="assets_subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-card shadow-sm border border-border rounded-xl p-6 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <div
                className={`w-16 h-16 rounded-lg ${asset.color} flex items-center justify-center mb-5`}
              >
                {asset.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <T id={asset.id} />
              </h3>
              <p className="text-muted-foreground">
                <T id={`${asset.id}_desc`} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
