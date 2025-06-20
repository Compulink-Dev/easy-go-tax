import { LucidePower } from "lucide-react";
import Title from "./Title";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

function Header({ link }: { link: string }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-4 z-">
      <Title />
      <div className="">
        <Button className="cursor-pointer" onClick={() => navigate(`${link}`)}>
          <LucidePower className="" />
        </Button>
      </div>
    </div>
  );
}

export default Header;
