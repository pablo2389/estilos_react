import styles from "./home.module.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to the Home Page
        </Typography>
        <Typography className={styles.span}>Estilos Modulares</Typography>
        <Button variant="contained" color="primary">Learn More</Button>
      </CardContent>
    </Card>
  );
}
