import { Card, CardContent } from "../ui/card";
import { Heading } from "../ui/heading";

const Intro = () => {
  return (
    <Card>
      <CardContent className="py-4">
        <p>Hi! There I’m</p>
        <Heading className={"my-8"}>
          Professional Web Application Specialist
        </Heading>

        <p className="text-muted-foreground">
          Full Stack Web Developer and Web Application specializing in front-end
          and back-end development. Experienced with all stages of the
          development cycle for dynamic websites. Well versed in numerous
          programming languages JavaScript ES6 Nodejs, structured language HTML5
          CSS3, open-source front-end JavaScript library ReactJS, NextJS With
          MongoDB & MySql Database.
        </p>
      </CardContent>
    </Card>
  );
};

export default Intro;
