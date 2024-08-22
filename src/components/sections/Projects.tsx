import * as React from "react";
import { Button } from "../ui/button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Code, Eye } from "lucide-react";

const Projects = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]"
      id="Projects"
    >
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[7.25rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Projects
        </h2>

        <div className="flex flex-col gap-y-8">
          <ul className="flex  justify-center gap-x-2 md:gap-x-4">
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                ALL
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                Real Website
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                Landing Page
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                E-commerce
              </Button>
            </li>
          </ul>

          <div className="flex flex-col justify-center items-center gap-y-8 md:flex-row gap-x-8">
            <Card
              sx={{
                maxWidth: 445,
                backgroundColor: "hsl(var(--secondary))",
                borderRadius: "2rem",
                zIndex: "10",
                boxShadow: "1px 1px 7px hsl(var(--primary))",
              }}
            >
              <CardActionArea>
                <CardMedia
                  className="h-[200px]"
                  component="img"
                  height="90"
                  image="https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="text-foreground"
                  >
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="sm" variant={"ghost"} className="text-primary">
                  View Demo <Eye className="mx-2" />
                </Button>
                <Button size="sm" variant={"ghost"} className="text-primary">
                  View Code <Code className="mx-2" />
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                maxWidth: 445,
                backgroundColor: "hsl(var(--secondary))",
                borderRadius: "2rem",
              }}
            >
              <CardActionArea>
                <CardMedia
                  className="h-[200px]"
                  component="img"
                  height="90"
                  image="https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-foreground"
                  >
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="sm">Share</Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                maxWidth: 445,
                backgroundColor: "hsl(var(--secondary))",
                borderRadius: "2rem",
              }}
            >
              <CardActionArea>
                <CardMedia
                  className="h-[200px]"
                  component="img"
                  height="90"
                  image="https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-foreground"
                  >
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="sm">Share</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
