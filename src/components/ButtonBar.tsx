import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row} from 'react-bootstrap';


interface ButtonBarProps {
    button_text: string;
    link: string;
  }


const ButtonBar: React.FC<ButtonBarProps> = ({ button_text , link }) => {

return ( 

<Container>
<Row className="rounded background-color-body mt-3 p-2">

<Col className="text-center">

<a href={link} download>
<Button className="button-custom-color m-1">{ button_text}</Button>
</a>


</Col>

</Row>

</Container>

);
}

export default ButtonBar;