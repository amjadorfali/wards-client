import { Book } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Link as RouterLink } from 'react-router-dom';

const Help: React.FC = () => {
	// TODO: Add logic for help page
	return (
		<Grid container item xs={11} sm={10} md={8} xl={7} justifyContent={'center'} alignSelf={'center'} gap={3}>
			<Grid item xs={12}>
				<Typography textAlign={'center'} variant={'h1'}>
					Help & Support
				</Typography>
			</Grid>

			<Grid item></Grid>
			<Typography paragraph textAlign={'center'}>
				You can reach us at{' '}
				<Link sx={{ fontSize: 'inherit' }} href={``}>
					EMAIL_HERE
				</Link>
				. We'll get back to you as soon as we can, typically within a few hours.
			</Typography>

			<Card elevation={10}>
				<CardActionArea
					component={RouterLink}
					to={'https://calendar.app.google/aiFyvFkPdB2kxFW86'}
					target={'_blank'}
					sx={{ height: '100%' }}
				>
					<CardContent>
						<Grid container justifyContent={'space-between'}>
							<Grid item xs={9}>
								<VideoCallIcon sx={{ width: '2.5rem', height: '2.5rem' }} color="secondary" />
								<Typography gutterBottom variant="h2" component="div" sx={{ mt: 2 }}>
									Book a demo call
								</Typography>
								<Typography paragraph variant="body2" color="text.secondary">
									Book a demo with one of our experts to see how Wards fits into your existing workflow.
								</Typography>
							</Grid>
							<Grid item xs={3} alignSelf={'center'} textAlign={'center'}>
								<ArrowForwardIosIcon color="secondary" />
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>

			<Card>
				<CardActionArea disabled sx={{ height: '100%' }}>
					<CardContent>
						<Grid container justifyContent={'space-between'}>
							<Grid item xs={9}>
								<Book sx={{ width: '2.5rem', height: '2.5rem' }} color="secondary" />
								<Typography gutterBottom variant="h2" component="div" sx={{ mt: 2 }}>
									Documentation
								</Typography>
								<Typography paragraph variant="body2" color="text.secondary">
									Learn how to integrate Wards with your existing services using our APIs and integrations.
								</Typography>
							</Grid>
							<Grid item xs={3} alignSelf={'center'} textAlign={'center'}>
								<ArrowForwardIosIcon color="secondary" />
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>

			{/* <Typography paragraph textAlign={'center'}>
				{' '}
				or take a look at the{' '}
				<Link
					component={RouterLink}
					// FIXME renable once we got FAQ
					// to={RoutesConfig.FAQ}
					to={''}
					
				>
					frequently asked questions <ArrowForwardIosIcon sx={{ width: '0.8rem', height: '0.8rem' }} />
				</Link>{' '}
			</Typography> */}
		</Grid>
	);
};

export default Help;
