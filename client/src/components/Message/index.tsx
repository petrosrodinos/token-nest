import { AlertCircle, CheckCircle } from "lucide-react";
import { FC } from "react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

interface MessageProps {
  title: string;
  description: string;
  visible?: boolean;
  variant?: "default" | "destructive" | "success";
}

const Message: FC<MessageProps> = ({ title, description, variant = "default", visible = true }) => {
  if (!visible) return null;

  const icons = {
    destructive: <AlertCircle className="h-4 w-4" />,
    success: <CheckCircle color="green" className="h-4 w-4" />,
    default: <AlertCircle className="h-4 w-4" />,
  };

  const alertClassess = {
    destructive: "bg-red-50 text-red-700 border-red-200",
    success: "bg-green-50 text-green-700 border-green-200",
    default: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <Alert
      className={`mt-2 ${alertClassess[variant]}`}
      variant={variant === "success" ? "default" : variant}
    >
      {icons[variant]}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default Message;
