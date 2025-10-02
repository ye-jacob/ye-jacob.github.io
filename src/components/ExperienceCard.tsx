import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

export function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-muted-foreground font-medium mt-1">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground leading-relaxed">{description}</p>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
