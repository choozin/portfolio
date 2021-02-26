import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'
import styles from './contact.module.css'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

//import MyForm from './contact/myform';

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

const Contact = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle('Contact');

    const [status, setStatus] = useState("");
    const [contactReason, setContactReason] = useState<string[]>([]);


    const reasons = [
        'Freelance Work Opportunity',
        'Employment Opportunity',
        'Collaboration Opportunity',
        'IT Consultation',
        'Technical Assistance',
        'Other Inquiries',
    ];

    const handleReasonChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        /*const { options } = event.target.value as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setContactReason(value);
        console.log(value)  */

        //const { options } = event.target.value as HTMLSelectElement;
        /*const value: string[] = [];
        
        if(options.length > 0) { 
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
        }
        setContactReason(value);*/
        //console.log(event.target.value)

        /*let currentContactReason = contactReason
        let clickedOption = event.target.value[0];
        currentContactReason.push(clickedOption)
        setContactReason(currentContactReason);
        console.log(currentContactReason)*/

        /*if(event) {
            let choice = event.target.value[1]
            let value = contactReason
            /*for(let i = 0; i < contactReason.length; i++) {
                contactReason[i] !== choice ? value.push(choice) : value.filter(choice)
            }
            
           value.push(choice)
            setContactReason(value)
            console.log(value)
        }*/
    }

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
        console.log('e', data);



    }

    /*return (
        <Layout home={false}>
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <section>
                <MyForm/>
            </section>
        </Layout>
    )*/

    return (
        <Layout
            nav='navbar'
            pageStyle='thin'
            returnHome={true}
        >
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <section>
                <Paper variant="elevation">
                    <form
                        className={styles.contactForm}
                        onSubmit={(e) => submitForm(e)}
                        action="https://formspree.io/f/mqkgnoye"
                        method="POST"
                    >
                        <h2 className={styles.paperHeader}>Send Me A Message!</h2>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input id="name" name="name" aria-describedby="my-helper-text" />
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="organization">Organization</InputLabel>
                            <Input id="organization" name="organization" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">(If applicable)</FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Your information will never be shared</FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl fullWidth={true}>
                            <InputLabel id="reason-label">Reason</InputLabel>
                            <Select

                                labelId="reason-label"
                                id="reason"
                                name="reason"
                                value={contactReason}
                                onChange={handleReasonChange}
                                multiple
                                input={<Input />}
                                inputProps={{ id: 'select-reason-change' }}
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
                            id="message"
                            name="message"
                            label="Your Message"
                            multiline
                            rows={4}
                            placeholder="Enter your message here"
                            fullWidth={true}
                        />
                        {status === "SUCCESS" ?
                            <p>Thank for getting in touch! I'll get back to you soon.</p> :
                            <div className={styles.submitButton}>
                                <Button
                                    id="submit"
                                    name="submit"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Icon>send</Icon>}
                                    size="large"
                                >
                                    Send
                                </Button>
                            </div>
                        }
                        {status === "ERROR" && <p>Oops! There was an error. Please refresh the page and try again. I'd tell you to get in touch with an administrator, but that's me, and getting in touch with me seems to be the problem.</p>}
                    </form>
                </Paper>
            </section>
        </Layout>
    )
}

export default Contact;