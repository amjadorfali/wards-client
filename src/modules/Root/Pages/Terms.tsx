import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
const Terms: React.FC = () => {
	return (
		<Grid container component={Paper} my={15} mx={'auto'} sx={{ maxWidth: { xs: '95%', md: '60%' } }} p={5} gap={5}>
			<Typography variant="h3">Terms of Use</Typography>
			<Grid item xs={12}>
				<Typography variant="h4">1. Account Creation and Usage</Typography>
				<br />
				<Typography paragraph>
					The Services are accessible to inGrididuals who are 13 years of age or older. If you are under the age of 18, you must obtain
					the consent of your parent or legal guardian to utilize the Services. If you are using the Services on behalf of another
					inGrididual or entity, you need to have the necessary authority to agree to these Terms on their behalf. It is imperative
					that you provide accurate and comprehensive information when setting up an account. Sharing of your account details or access
					credentials outside your organization is not permitted, and you hold responsibility for all activities conducted under your
					account.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">2. Usage Requirements</Typography>
				<br />

				<Typography paragraph>
					(a) Services Usage. We provide you with a non-exclusive license to use the Services, as long as it's in accordance with these
					Terms. Your usage of the Services must adhere to these Terms and all relevant laws. All rights, title, and interest in the
					Services are the property of us and our affiliates.
				</Typography>
				<Typography paragraph>
					(b) Feedback. We value and appreciate all forms of feedback, including comments, ideas, suggestions, and proposals for
					enhancements. If you choose to provide such input, we reserve the right to use it freely, without any obligation to
					compensate you.
				</Typography>
				<Typography paragraph>
					(c) Limitations. Your use of the Services must not (i) infringe, violate, or misappropriate the rights of any inGrididual;
					(ii) attempt to reverse engineer, decompile, or decipher the source code or underlying components of the Services' models,
					algorithms, and systems, unless such restrictions are against applicable law; (iii) utilize the Services' output to create
					models that compete with RemoteOps; (iv) extract data or output from the Services using automated or programmatic methods,
					such as scraping or web harvesting, unless permitted through the API; (v) falsely represent that the output from the Services
					was generated by a human when it wasn't, or otherwise breach our Usage Policies; (vi) purchase, sell, or transfer API keys
					without our prior approval; or (vii) send us personal information of children under the age of 13 or the relevant age of
					digital consent. You must abide by any rate limits and other stipulations outlined in our documentation.
				</Typography>
				<Typography paragraph>
					(d) Usage of Third-Party Offerings. If you engage with any third-party software, services, or products in conjunction with
					our Services, they are governed by their respective terms. We do not bear any responsibility for the products or offerings
					provided by third parties.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">3. Content</Typography>
				<br />

				<Typography paragraph>
					(a) Your Content: The Services allow you to provide input ("Input") and in return, you receive output generated by the
					Services based on this Input ("Output"). Both Input and Output are collectively referred to as "Content". As long as
					applicable law permits, you retain ownership of all Input. Provided you adhere to these Terms, RemoteOps transfers all
					rights, title, and interest in and to the Output to you. This implies that you can utilize the Content for any purpose,
					including commercial ones such as sales or publication, as long as you comply with these Terms. RemoteOps can use the Content
					to maintain and provide the Services, adhere to applicable law, and enforce our policies. You hold responsibility for the
					Content, and must ensure that it does not breach any applicable law or these Terms.
				</Typography>
				<Typography paragraph>
					(b) Content Similarity: Due to the nature of machine learning, Output might not be exclusive to each user and the Services
					might generate identical or similar output for RemoteOps or a third party. For instance, if you provide input like "What
					color is the sky?" and receive output like "The sky is blue," other users might ask similar questions and receive the same
					answer. Responses requested by and generated for other users are not regarded as your Content.
				</Typography>
				<Typography paragraph>
					(c) Accuracy: The fields of artificial intelligence and machine learning are continually evolving. We are persistently
					striving to enhance our Services to make them more precise, reliable, safe, and beneficial. However, due to the probabilistic
					nature of machine learning, using our Services may sometimes result in incorrect Output that does not accurately represent
					real people, places, or facts. You should assess the accuracy of any Output as suitable for your use case, which may include
					a human review of the Output.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">4. Fees and Payments</Typography>
				<br />

				<Typography paragraph>
					(a) Payment and Charges. You are obliged to cover all charges related to your account ("Charges") according to the stated
					prices and conditions on the relevant pricing page, or as mutually agreed in written form. We hold the right to rectify
					pricing errors or mistakes, even if we have already issued an invoice or received payment. You must provide complete and
					accurate billing details including an authorized and valid payment method. We will charge your payment method on a mutually
					agreed periodic basis, but we may reasonably alter the date of charge posting. You give RemoteOps, its affiliates, and our
					third-party payment processor(s) the authority to charge your payment method for the Charges. If your payment fails, we will
					notify you in writing and may halt access to the Services until payment is received. Charges are payable in U.S. dollars and
					are due upon invoice issuance. All payments are non-refundable unless stated in this Agreement.
				</Typography>
				<Typography paragraph>
					(b) Tax Obligations. Unless otherwise stated, Charges do not encompass federal, state, local, and foreign taxes, duties, and
					other similar assessments ("Taxes"). You bear the responsibility for all Taxes linked to your purchase, excluding Taxes based
					on our net income, and we may invoice you for these Taxes. You agree to pay these Taxes promptly and provide us with
					documentation demonstrating the payment, or any other proof that we may reasonably request. RemoteOps uses the name and
					address in your account registration for tax purposes, so it's vital to maintain the accuracy of this information.
				</Typography>
				<Typography paragraph>
					(c) Changes in Pricing. We reserve the right to adjust our prices by posting a notice to your account and/or on our website.
					Price increases will take effect 14 days after their posting, except for increases made for legal reasons or increases made
					to Beta Services (as defined in our Service Terms), which will be effective immediately. Any price changes will apply to the
					Charges on your account immediately after the changes become effective.
				</Typography>
				<Typography paragraph>
					(d) Payment Discrepancies and Overdue Payments. If you wish to dispute any Charges or Taxes, please contact us within thirty
					(30) days from the date of the disputed invoice. Uncontested overdue amounts may attract a finance charge of 1.5% of the
					unpaid balance per month. If any part of your Charges is overdue, we may suspend your access to the Services after notifying
					you in writing of the overdue payment.
				</Typography>
				<Typography paragraph>
					(e) Free Service Tier. You are not allowed to create more than one account to take advantage of credits offered in the free
					tier of the Services. If we suspect that you are misusing the free tier, we may charge you the standard fees or cease
					providing access to the Services.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">5. Confidentiality, Security and Data Protection</Typography>
				<br />

				<Typography paragraph>
					(a) Handling of Confidential Information. RemoteOps, its affiliates, or other third parties may share their Confidential
					Information with you. This Confidential Information can only be used as necessary to utilize the Services in accordance with
					these Terms. The sharing of Confidential Information with any third party is prohibited, and you should protect this
					information similarly to how you would protect your own confidential data of a similar kind, using at least a reasonable
					level of care. Confidential Information refers to nonpublic data that is classified as confidential by RemoteOps or its
					affiliates or third parties, or data that would be reasonably assumed to be confidential, including software, specifications,
					and other nonpublic business information. However, Confidential Information does not include any data that: (i) becomes
					publicly accessible due to no fault of your own; (ii) was already in your possession without any associated confidentiality
					obligations when you received it under these Terms; (iii) is legally shared with you by a third party without any
					confidentiality obligations; or (iv) was independently developed by you without the use of Confidential Information. In cases
					where you are legally obligated or ordered by a court or governmental authority to disclose Confidential Information, you
					must provide RemoteOps with reasonable prior written notice and take efforts to limit the extent of the disclosure, including
					assisting us in contesting the requirement for disclosure, whenever feasible.
				</Typography>
				<Typography paragraph>
					(b) Security Measures. You are required to put into place reasonable and appropriate security measures to secure your access
					to and use of the Services. If you come across any security vulnerabilities or breaches related to your use of the Services,
					you must immediately notify RemoteOps and provide details about the vulnerability or breach.
				</Typography>
				<Typography paragraph>
					(c) Management of Personal Data. If you process personal data while using the Services, you must provide adequate privacy
					notifications and secure necessary consents for the processing of such data. You assure us that you are processing such data
					in compliance with relevant laws. If you intend to use the RemoteOps API for the processing of “personal data” as defined in
					the GDPR or “Personal Information” as defined in the CCPA, please contact with us to request to execute our Data Processing
					Addendum.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">6. Term and Termination</Typography>
				<br />

				<Typography paragraph>
					(a) Conclusion or Interruption of Services. These Terms become effective when you commence using the Services and remain in
					force until they are ended. You have the right to terminate these Terms at any time for any reason by ceasing to use the
					Services and Content. We may terminate these Terms for any reason by giving you a minimum of 3 days' advance notice. We can
					terminate these Terms immediately upon providing you notice if you substantially violate Sections 2 (Usage Requirements), or
					5 (Confidentiality, Security, and Data Protection), if there are modifications in relationships with third-party technology
					providers beyond our control, or in order to comply with laws or governmental requests. We reserve the right to suspend your
					access to the Services if you do not adhere to these Terms, if your use poses a security threat to us or any third party, or
					if we suspect that your use is fraudulent or could subject us or any third party to liability.
				</Typography>
				<Typography paragraph>
					(b) Implications of Termination. Following termination, you will cease using the Services and promptly return or, if directed
					by us, destroy any Confidential Information. The parts of these Terms which, by their nature, should continue past
					termination or expiration will survive, including, but not limited to, Sections 3 and 5-7.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">7. Indemnification; Disclaimer of Warranties; Limitations on Liability</Typography>
				<br />

				<Typography paragraph>
					(a) Indemnity: You agree to protect, compensate, and absolve us, our partners, and our staff from any claims, losses, or
					costs (including attorney fees) that arise from your use of the Services. This includes any content you provide, products or
					services you develop using the Services, or any violation of these Terms or applicable laws.
				</Typography>
				<Typography paragraph>
					(b) Disclaimer: The Services are provided as they are, without any guarantees. We and our affiliates disclaim all warranties,
					including but not limited to the service's quality, fitness for a particular purpose, and non-infringement. We do not
					guarantee that the Services will be uninterrupted, accurate, or error-free, or that any content will be secure or not lost or
					altered.
				</Typography>
				<Typography paragraph>
					(c) Limitations of Liability: The services provided by RemoteOps are offered as they are and available at the time of use.
					RemoteOps doesn't make any promises, either explicit or implicit, about the operation of its services, or about the
					information, content, or materials it includes. It is completely your responsibility to use the services, their content, and
					any services or items you obtain from us. RemoteOps, nor any person associated with it, guarantees or represents the
					completeness, security, reliability, quality, accuracy, or availability of the services. To be more specific, neither
					RemoteOps nor anyone connected to it guarantees that the services, their content, or any services or items you obtain through
					the services will be precise, reliable, without errors, uninterrupted, that faults will be fixed, that the services or the
					server providing it are free from viruses or other damaging components, or that the services or any services or items
					obtained through the services will meet your needs or expectations. RemoteOps henceforth renounces all warranties of any
					kind, whether they are express or implied, legal, or otherwise, including but not limited to any warranties of
					merchantability, non-infringement, and suitability for a specific purpose. This does not affect any warranties that cannot be
					dismissed or limited according to the law.
				</Typography>
			</Grid>
		</Grid>
	);
};
export default Terms;
