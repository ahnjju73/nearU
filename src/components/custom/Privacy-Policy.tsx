import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogProps,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const StudHome = ({ open, onClose }: DialogProps) => (
  <Dialog open={open} onClose={onClose} maxWidth='lg' fullWidth>
    <DialogTitle>Privacy Policy</DialogTitle>
    <DialogContent>
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and are committed to protecting it through our compliance with this
        privacy policy (“Policy”). This Policy describes the types of information we may collect
        from you or that you may provide (“Personal Information”) on the nearu.kr website (“Website”
        or “Service”) and any of its related products and services (collectively, “Services”), and
        our practices for collecting, using, maintaining, protecting, and disclosing that Personal
        Information. It also describes the choices available to you regarding our use of your
        Personal Information and how you can access and update it.
      </p>
      <p>
        This Policy is a legally binding agreement between you (“User”, “you” or “your”) and this
        Website operator (“Operator”, “we”, “us” or “our”). If you are entering into this agreement
        on behalf of a business or other legal entity, you represent that you have the authority to
        bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall
        refer to such entity. If you do not have such authority, or if you do not agree with the
        terms of this agreement, you must not accept this agreement and may not access and use the
        Website and Services. By accessing and using the Website and Services, you acknowledge that
        you have read, understood, and agree to be bound by the terms of this Policy. This Policy
        does not apply to the practices of companies that we do not own or control, or to
        individuals that we do not employ or manage.
      </p>
      <h2>Collection of personal information</h2>
      <p>
        You can access and use the Website and Services without telling us who you are or revealing
        any information by which someone could identify you as a specific, identifiable individual.
        If, however, you wish to use some of the features offered on the Website, you may be asked
        to provide certain Personal Information (for example, your name and e-mail address).
      </p>
      <p>
        We receive and store any information you knowingly provide to us when you create an account,
        publish content, or fill any forms on the Website. When required, this information may
        include the following:
      </p>
      <ul style={{ marginLeft: 48 }}>
        <li>Account details (such as user name, unique user ID, password, etc)</li>
        <li>Contact information (such as email address, phone number, etc)</li>
        <li>
          Any other materials you willingly submit to us (such as articles, images, feedback, etc)
        </li>
      </ul>
      <p>
        to take advantage of some of the features on the Website. Users who are uncertain about what
        information is mandatory are welcome to contact us.
      </p>
      <p>
        You can choose not to provide us with your Personal Information, but then you may not be
        able{' '}
      </p>
      <h2>Use and processing of collected information</h2>
      <p>
        We act as a data controller and a data processor when handling Personal Information, unless
        we have entered into a data processing agreement with you in which case you would be the
        data controller and we would be the data processor.
      </p>
      <p>
        Our role may also differ depending on the specific situation involving Personal Information.
        We act in the capacity of a data controller when we ask you to submit your Personal
        Information that is necessary to ensure your access and use of the Mobile Application and
        Services. In such instances, we are a data controller because we determine the purposes and
        means of the processing of Personal Information.
      </p>
      <p>
        We act in the capacity of a data processor in situations when you submit Personal
        Information through the Mobile Application and Services. We do not own, control, or make
        decisions about the submitted Personal Information, and such Personal Information is
        processed only in accordance with your instructions. In such instances, the User providing
        Personal Information acts as a data controller.
      </p>
      <p>
        In order to make the Mobile Application and Services available to you, or to meet a legal
        obligation, we may need to collect and use certain Personal Information. If you do not
        provide the information that we request, we may not be able to provide you with the
        requested products or services. Any of the information we collect from you may be used for
        the following purposes:
      </p>
      <ul style={{ marginLeft: 48 }}>
        <li>Respond to inquiries and offer support</li>
        <li>Request user feedback</li>
        <li>Improve user experience</li>
        <li>Enforce terms and conditions and policies</li>
        <li>Protect from abuse and malicious users</li>
        <li>Run and operate the Mobile Application and Services</li>
      </ul>
      <p>
        Processing your Personal Information depends on how you interact with the Mobile Application
        and Services, where you are located in the world and if one of the following applies: (i)
        you have given your consent for one or more specific purposes; (ii) provision of information
        is necessary for the performance of an agreement with you and/or for any pre-contractual
        obligations thereof; (iii) processing is necessary for compliance with a legal obligation to
        which you are subject; (iv) processing is related to a task that is carried out in the
        public interest or in the exercise of official authority vested in us; (v) processing is
        necessary for the purposes of the legitimate interests pursued by us or by a third party.
      </p>
      <p>
        Note that under some legislations we may be allowed to process information until you object
        to such processing by opting out, without having to rely on consent or any other of the
        legal bases. In any case, we will be happy to clarify the specific legal basis that applies
        to the processing, and in particular whether the provision of Personal Information is a
        statutory or contractual requirement, or a requirement necessary to enter into a contract.
      </p>
      <h2>Managing information</h2>
      <p>
        You are able to delete certain Personal Information we have about you. The Personal
        Information you can delete may change as the Website and Services change. When you delete
        Personal Information, however, we may maintain a copy of the unrevised Personal Information
        in our records for the duration necessary to comply with our obligations to our affiliates
        and partners, and for the purposes described below. If you would like to delete your
        Personal Information or permanently delete your account, you can do so by contacting us.
      </p>
      <h2>Disclosure of information</h2>
      <p>
        To maintain the highest level of privacy and to protect your Personal Information to the
        full extent, we do not share your Personal Information with anyone and for any reason.
      </p>
      <h2>Retention of information</h2>
      <p>
        We will retain and use your Personal Information for the period necessary to comply with our
        legal obligations, as long as your user account remains active, to enforce our agreements,
        resolve disputes, and unless a longer retention period is required or permitted by law.
      </p>
      <p>
        We may use any aggregated data derived from or incorporating your Personal Information after
        you update or delete it, but not in a manner that would identify you personally. Once the
        retention period expires, Personal Information shall be deleted. Therefore, the right to
        access, the right to erasure, the right to rectification, and the right to data portability
        cannot be enforced after the expiration of the retention period.
      </p>
      <h2>Do Not Track signals</h2>
      <p>
        Some browsers incorporate a Do Not Track feature that signals to websites you visit that you
        do not want to have your online activity tracked. Tracking is not the same as using or
        collecting information in connection with a website. For these purposes, tracking refers to
        collecting personally identifiable information from consumers who use or visit a website or
        online service as they move across different websites over time. How browsers communicate
        the Do Not Track signal is not yet uniform. As a result, the Website and Services are not
        yet set up to interpret or respond to Do Not Track signals communicated by your browser.
        Even so, as described in more detail throughout this Policy, we limit our use and collection
        of your Personal Information.
      </p>
      <h2>Links to other resources</h2>
      <p>
        The Website and Services contain links to other resources that are not owned or controlled
        by us. Please be aware that we are not responsible for the privacy practices of such other
        resources or third parties. We encourage you to be aware when you leave the Website and
        Services and to read the privacy statements of each and every resource that may collect
        Personal Information.
      </p>
      <h2>Information security</h2>
      <p>
        We secure information you provide on computer servers in a controlled, secure environment,
        protected from unauthorized access, use, or disclosure. We maintain reasonable
        administrative, technical, and physical safeguards in an effort to protect against
        unauthorized access, use, modification, and disclosure of Personal Information in our
        control and custody. However, no data transmission over the Internet or wireless network can
        be guaranteed.
      </p>
      <p>
        Therefore, while we strive to protect your Personal Information, you acknowledge that (i)
        there are security and privacy limitations of the Internet which are beyond our control;
        (ii) the security, integrity, and privacy of any and all information and data exchanged
        between you and the Mobile Application and Services cannot be guaranteed; and (iii) any such
        information and data may be viewed or tampered with in transit by a third party, despite
        best efforts.
      </p>
      <p>
        As the security of Personal Information depends in part on the security of the device you
        use to communicate with us and the security you use to protect your credentials, please take
        appropriate measures to protect this information.
      </p>
      <h2>Data breach</h2>
      <p>
        In the event we become aware that the security of the Mobile Application and Services has
        been compromised or Users&apos; Personal Information has been disclosed to unrelated third
        parties as a result of external activity, including, but not limited to, security attacks or
        fraud, we reserve the right to take reasonably appropriate measures, including, but not
        limited to, investigation and reporting, as well as notification to and cooperation with law
        enforcement authorities. In the event of a data breach, we will make reasonable efforts to
        notify affected individuals if we believe that there is a reasonable risk of harm to the
        User as a result of the breach or if notice is otherwise required by law. When we do, we
        will send you an email.
      </p>
      <h2>Changes and amendments</h2>
      <p>
        We reserve the right to modify this Policy or its terms related to the Mobile Application
        and Services at any time at our discretion. When we do, we will revise the updated date at
        the bottom of this page. We may also provide notice to you in other ways at our discretion,
        such as through the contact information you have provided.
      </p>
      <p>
        An updated version of this Policy will be effective immediately upon the posting of the
        revised Policy unless otherwise specified. Your continued use of the Mobile Application and
        Services after the effective date of the revised Policy (or such other act specified at that
        time) will constitute your consent to those changes. However, we will not, without your
        consent, use your Personal Information in a manner materially different than what was stated
        at the time your Personal Information was collected.
      </p>
      <h2>Acceptance of this policy</h2>
      <p>
        You acknowledge that you have read this Policy and agree to all its terms and conditions. By
        accessing and using the Mobile Application and Services and submitting your information you
        agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy,
        you are not authorized to access or use the Mobile Application and Services.
      </p>
      <h2>Contacting us</h2>
      <p>
        If you have any questions, concerns, or complaints regarding this Policy, the information we
        hold about you, or if you wish to exercise your rights, we encourage you to contact us using
        the details below:
      </p>
      <ul style={{ marginLeft: 48 }}>
        <li>contact.nearu@gmail.com</li>
      </ul>
      <p>
        We will attempt to resolve complaints and disputes and make every reasonable effort to honor
        your wish to exercise your rights as quickly as possible and in any event, within the
        timescales provided by applicable data protection laws.
      </p>
      <p>This document was last updated on November 1, 2023</p>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => {
          if (!onClose) return;
          onClose({}, 'backdropClick');
        }}
      >
        닫기
      </Button>
    </DialogActions>
  </Dialog>
);

export default StudHome;
