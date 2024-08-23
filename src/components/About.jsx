import styles from "./about.module.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography variant="h5" component="div">
          About Us
        </Typography>
        <Typography className={styles.h1}>Estilos Modulares</Typography>
        <Button variant="contained" color="secondary">Learn More</Button>
      </CardContent>
    </Card>
  );
}
