// interface HeadingProps {
//   title: string;
//   description: string;
// }

// export const Heading: React.FC<HeadingProps> = ({
//   title,
//   description
// }) => {
//   return (
//     <div>
//       <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
//       <p className="text-sm text-muted-foreground">
//         {description}
//       </p>
//     </div>
//   );
// };

// Heading.module.css

interface HeadingProps {
  title: string;
  description: string;
  variant?: "dashboard" | "landing"; // Varyasyonları buraya ekleyin
}

const DashboardHeading: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const LandingHeading: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className="text-5xl font-bold tracking-tight text-transparent-background-clip ">
        {title}
      </h2>
      <p className="mb-16 text-base text-muted-foreground">{description}</p>
    </div>
  );
};

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  variant = "dashboard", // Varsayılan olarak dashboard kullanabilirsiniz
}) => {
  return (
    <div>
      {variant === "dashboard" && (
        <DashboardHeading title={title} description={description} />
      )}
      {variant === "landing" && (
        <LandingHeading title={title} description={description} />
      )}
      {/* Ek varyasyonlar için buraya ekleyebilirsiniz */}
    </div>
  );
};
