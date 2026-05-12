"use client";

import {
  Activity,
  Phone,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
  Shield,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#2563eb",
  },
  leads: {
    label: "Leads",
    color: "#f97316",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", revenue: 4200, leads: 240 },
  { month: "Feb", revenue: 5600, leads: 380 },
  { month: "Mar", revenue: 4800, leads: 290 },
  { month: "Apr", revenue: 7200, leads: 450 },
  { month: "May", revenue: 6800, leads: 410 },
  { month: "Jun", revenue: 8900, leads: 520 },
];

const statsData = [
  { label: "Missed Calls Recovered", value: "127+", period: "per client/year" },
  { label: "Revenue Influenced", value: "$2.3M", period: "across clients" },
  { label: "Client Retention", value: "94%", period: "annual rate" },
];

export function DashboardSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-surface relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(255,140,0,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,140,0,0.12) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255,140,0,0.1) 0%, rgba(255,69,0,0.03) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <Badge variant="eyebrow">DASHBOARD</Badge>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            See Your Growth in Real-Time
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Monitor your performance metrics, track recovered calls, and watch your revenue grow
            with our comprehensive dashboard.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {statsData.map((stat) => (
            <Card key={stat.label} className="bg-white border-border">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-serif text-gradient-accent mb-1">{stat.value}</p>
                <p className="font-medium text-foreground text-sm">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="bg-white border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                    Revenue Growth
                  </p>
                  <p className="text-2xl font-serif text-foreground mt-1">$89,000</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  +24%
                </span>
              </div>
              <ChartContainer config={chartConfig} className="h-64 w-full">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} className="stroke-border/50" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Lead Chart */}
          <Card className="bg-white border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                    Lead Generation
                  </p>
                  <p className="text-2xl font-serif text-foreground mt-1">2,290</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  +18%
                </span>
              </div>
              <ChartContainer config={chartConfig} className="h-64 w-full">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-leads)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-leads)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} className="stroke-border/50" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="leads"
                    stroke="var(--color-leads)"
                    strokeWidth={2}
                    fill="url(#colorLeads)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="bg-white border-border">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                Live Activity
              </p>
              <div className="space-y-4">
                {[
                  { time: "2m ago", text: "Missed call recovered from Dallas, TX", type: "call" },
                  { time: "5m ago", text: "New 5-star review on Google", type: "review" },
                  { time: "12m ago", text: "Membership signup: $299/mo plan", type: "membership" },
                  { time: "18m ago", text: "Automated text sent to follow up", type: "sms" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_50)] mt-2" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Uptime Stats */}
          <Card className="bg-white border-border">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-5xl font-serif text-gradient-accent mb-2">99.99%</p>
                <p className="text-muted-foreground text-sm">System Uptime</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-surface rounded-xl">
                  <Phone className="w-6 h-6 text-[oklch(0.65_0.18_50)] mx-auto mb-2" />
                  <p className="text-xl font-semibold text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground">Call Coverage</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-xl">
                  <MessageSquare className="w-6 h-6 text-[oklch(0.65_0.18_50)] mx-auto mb-2" />
                  <p className="text-xl font-semibold text-foreground">&lt;30s</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Banner */}
        <div className="mt-8 bg-white border border-border rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
              <span className="text-sm text-foreground">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
              <span className="text-sm text-foreground">7-Day Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
              <span className="text-sm text-foreground">4.9/5 Rating</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
              <span className="text-sm text-foreground">500+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
