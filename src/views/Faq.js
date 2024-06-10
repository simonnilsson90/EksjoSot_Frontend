import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import image from '../../assets/images/homepage/connecting.webp'
import theme from '../marketplace/theme/Theme'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  backgroundColor: '#C8B6A1',
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box
      sx={{ height: '100vh', backgroundColor: theme.palette.background.paper }}
    >
      <Box>
        <img
          src={image}
          alt="connecting people"
          style={{ width: '100%', height: '30vh' }}
        />
      </Box>

      <Box
        sx={{
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex',
          m: 3,
        }}
      >
        <Typography variant="h4">
          FAQ for Buyers at The Everyone Store
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex',
          m: 3,
        }}
      >
        <Typography variant="body2">
          Welcome to our FAQ page! Here, we've compiled a list of commonly asked
          questions to help you better understand how our marketplace works and
          how you can make the most of our services. Whether you're a creator
          looking to sell your digital products or a customer eager to discover
          unique digital assets, our FAQ section is here to provide you with
          quick and clear answers.
        </Typography>
      </Box>

      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            How Can I Purchase Datasets from The Everyone Store?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Purchasing datasets is straightforward. Simply create a buyer
            account on The Everyone Store, browse our extensive collection of
            datasets across various categories, and select the ones that fit
            your project needs. Our platform facilitates secure transactions and
            instant access to datasets once your purchase is complete.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What Types of Datasets Are Available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a rich diversity of datasets suitable for a wide range of
            AI modeling needs, including but not limited to:
            <ul>
              <li>Images and Videos: For computer vision projects.</li>
              <li>
                Text and Documents: Ideal for natural language processing and
                analysis.
              </li>
              <li>
                Voice Recordings: Perfect for speech recognition and generation
                models.
              </li>
              <li>Sensor Data: Useful for IoT applications and more.</li>
            </ul>
            Our catalog is constantly expanding, ensuring you have access to the
            high-quality data needed for cutting-edge AI development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How Are the Datasets Priced?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pricing is based on the dataset's category, quality, and
            comprehensiveness. We strive for transparency and fairness in our
            pricing model to ensure you get the best value for your investment.
            Standard and premium categories are clearly marked, helping you make
            informed decisions based on your project budget and requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can I Preview a Dataset Before Purchasing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer previews for most of our datasets, allowing you to
            assess their relevance and quality before making a purchase. These
            previews provide a snapshot of the dataset’s structure and content,
            ensuring it meets your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is Your Refund Policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At The Everyone Store, we prioritize customer satisfaction. If a
            dataset does not meet the described standards or is not as expected,
            we offer a refund or exchange policy within a certain period after
            purchase. Please refer to our detailed refund policy for more
            information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            How Do I Know the Datasets Are Ethically Sourced?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are committed to ethical data practices. All datasets on The
            Everyone Store are sourced from contributors who agree to our strict
            ethical guidelines, ensuring the data is collected and shared
            responsibly. We perform due diligence to maintain high ethical
            standards across our platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Is There Support Available for Integrating Datasets Into My Project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Our team is available to assist you with any queries
            related to dataset integration. Whether you need technical support
            or advice on best practices for utilizing the datasets, we’re here
            to help ensure your project's success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can I Request Custom Datasets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, if you have specific requirements that our existing datasets do
            not meet, The Everyone Store offers a custom dataset request
            service. Contact us with your specifications, and we will work with
            our network of contributors to source or create datasets tailored to
            your project needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can I Request Custom Datasets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, if you have specific requirements that our existing datasets do
            not meet, The Everyone Store offers a custom dataset request
            service. Contact us with your specifications, and we will work with
            our network of contributors to source or create datasets tailored to
            your project needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How Can I Stay Informed About New Datasets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Stay ahead of the curve by subscribing to The Everyone Store’s
            newsletter. You’ll receive updates on new dataset arrivals, special
            offers, and insights into AI development trends. You can also
            customize your subscription preferences to receive notifications
            about datasets relevant to your interests.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel11'}
        onChange={handleChange('panel11')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What Makes The Everyone Store the Go-To Platform for AI Datasets?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Everyone Store stands out for its comprehensive dataset
            collection, ethical sourcing, transparent pricing, and exceptional
            support. By choosing us, you’re not just acquiring data; you’re
            investing in a partnership that supports your AI projects from
            conception to completion. Our commitment to innovation, quality, and
            ethical practices makes us the preferred choice for AI developers
            worldwide.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel12'}
        onChange={handleChange('panel12')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Can I Share or Resell the Datasets I Purchase?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The datasets you purchase from The Everyone Store are for your
            personal or organizational use, depending on the license you choose
            at the time of purchase. Redistribution, sharing, or reselling the
            datasets without explicit permission from The Everyone Store is
            prohibited. Please review the specific license agreement for each
            dataset to understand the full scope of permissible use.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </Box>
  )
}
