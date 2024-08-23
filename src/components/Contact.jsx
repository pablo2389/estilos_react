import styles from "./contact.module.css";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function Contact() {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography gutterBottom variant='h3' component='div'>
          Contact Us
        </Typography>
        <Typography className={styles.span}>Estilos Modulares</Typography>
        <Button variant="contained" color="success">Learn More</Button>
      </CardContent>
    </Card>
  );
}
