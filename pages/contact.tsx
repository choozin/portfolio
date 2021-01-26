import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'
import styles from './contact.module.css'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    TextField,
    Paper,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    Button,
    Icon,
} from '@material-ui/core'

const reasons = [
    'Freelance Work Opportunity',
    'Employment Opportunity',
    'Collaboration Opportunity',
    'IT Consultation',
    'Technical Assistance',
    'Other Inquiries',
];

const Contact = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle('Contact');

    const [contactReason, setContactReason] = useState([]);

    const handleReasonChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setContactReason(value);
    }

    return (
        <Layout home={false}>
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <section>
                <Paper variant="elevation">
                    <form className={styles.contactForm}>
                    <h2 className={styles.paperHeader}>Send Me A Message!</h2>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input id="name" aria-describedby="my-helper-text" />
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="organization">Organization</InputLabel>
                            <Input id="organization" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">(If applicable)</FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Your information will never be shared</FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel id="reason-label">Reason</InputLabel>
                            <Select

                                labelId="reason-label"
                                id="reason"
                                value={contactReason}
                                onChange={handleReasonChange}
                                multiple
                                input={<Input />}
                                renderValue={(selected) => (selected as string[]).join(', ')}
                            >
                                {reasons.map((reason) => (
                                    <MenuItem key={reason} value={reason}>
                                        <Checkbox checked={contactReason.indexOf(reason) > -1} />
                                        <ListItemText primary={reason} />
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>(Please select one)</FormHelperText>
                        </FormControl>
                        <br /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Message"
                            multiline
                            rows={4}
                            placeholder="Enter your message here"
                            fullWidth={true}
                        />
                        <div className={styles.submitButton}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<Icon>send</Icon>}
                                size="large"
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                </Paper>
            </section>
        </Layout>
    )
}

export default Contact;