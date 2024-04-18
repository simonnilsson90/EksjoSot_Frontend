// Using MUI (Material-UI) for our UI components. MUI provides a comprehensive suite of 
// pre-designed components that are customizable and responsive. This choice simplifies 
// the development of visually consistent interfaces across the application. 
// For more details, refer to [MUI documentation](https://mui.com/).

import { useState } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

export default function ConsentForm() {
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleAgreementChange = (event) => {
    setAgreementChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agreementChecked) {
      alert("Thank you for agreeing to our terms.");
    } else {
      alert("You must agree to the terms to continue.");
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>Welcome to The Everyone Store by The Knowledge Company</Typography>
      <Typography paragraph>Embark on an Exciting Journey of Innovation and Reward with Us!</Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>User Agreement & Data Consent</Typography>
        <List>
          <ListItem>
            <ListItemText primary="1. Data Use and Protection" secondary="Your anonymized data is the key to developing cutting-edge AI. We ensure it's used responsibly, with your privacy as our priority." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Intellectual Property and Licensing" secondary="You're in control. While we harness your data to innovate, you retain ownership and enjoy the fruits of commercial success." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Data Rights and Withdrawal" secondary="Your voice matters. You can update your preferences or withdraw your data, keeping you in the driver's seat." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Liability and Indemnification" secondary="Our partnership is built on trust. We protect your interests, ensuring a safe and secure collaboration." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Financial Benefits and Passive Income Structure" secondary="Income Distribution: Specific details regarding the calculation, eligibility, and distribution of passive income generated from the use of your data in commercial applications will be communicated separately." />
          </ListItem>
          <ListItem>
            <ListItemText primary="6. Ethical Use and Liability for Misuse of AI" secondary="We commit to the ethical development and deployment of AI technologies. Contributors must ensure that the data provided does not promote or enable illegal or unethical uses." />
          </ListItem>
          <ListItem>
            <ListItemText primary="7. Dispute Resolution Mechanism" secondary="Any disputes arising under this agreement should first be attempted to be resolved through mutual negotiation. If unresolved, mediation may be pursued." />
          </ListItem>
          <ListItem>
            <ListItemText primary="8. Termination of Agreement" secondary="Either party may terminate this agreement with notice for any reason. Specific terms regarding the handling and deletion of data upon termination will be adhered to." />
          </ListItem>
          <ListItem>
            <ListItemText primary="9. Contributor Representations and Warranties" secondary="Contributors warrant that they have the legal right to contribute their data and that such contribution does not infringe upon the rights of third parties." />
          </ListItem>
          <ListItem>
            <ListItemText primary="10. Modification and Use of Data" secondary="We reserve the right to modify contributed data for quality improvement, provided such modifications do not compromise the integrity of the data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="11. Data Security Measures" secondary="The Knowledge Company commits to implementing and maintaining stringent data security measures to protect against unauthorized access or destruction of contributed data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="12. Detailed Indemnification Provisions" secondary="Contributors agree to indemnify and hold harmless The Knowledge Company from any claims arising from the breach of this agreement." />
          </ListItem>
          <ListItem>
            <ListItemText primary="13. Final Provisions" secondary="This agreement constitutes the entire agreement between the parties regarding its subject matter." />
          </ListItem>
        </List>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" variant="standard" fullWidth>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreementChecked}
                    onChange={handleAgreementChange}
                    name="agree"
                  />
                }
                label="I agree to the terms and conditions outlined above."
              />
            </FormGroup>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!agreementChecked}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
