import {
	business_dashboard,
	business_dashboard2,
	hd_lg1,
	hd_lg2,
	tesla_3D1,
	tesla_3D2,
} from '../assets';

let projectsData = [
	{
		id: 0,
		image: hd_lg1,
		image2: hd_lg2,
		title: 'Hd-Lg Website',
		text: ['TypeScript', 'NextJS 13', 'TailwindCSS'],
		github: 'https://github.com/Hd-Lg/hd_lg-website',
		website: 'https://github.com/Hd-Lg/hd_lg-website',
	},
	{
		id: 1,
		image: business_dashboard,
		image2: business_dashboard2,
		title: 'Business Dashboard',
		text: ['React', 'React Context', 'SyncFusion', 'TailwindCSS'],
		website: 'https://hd-lg.github.io/business_dashboard/',
		github: '',
	},
	{
		id: 2,
		image: tesla_3D1,
		image2: tesla_3D2,
		title: '3D Background Video Tesla',
		text: ['Blender', 'HTML/CSS', '3D'],
		website: 'https://hd-lg.github.io/3d_tesla-website/',
		github: '',
	},
	// {
	// 	id: 3,
	// 	title: 'Find Resto App',
	// 	text: ['React Native', 'expo', 'Google Places', ' YELP Api'],
	// },
];

export default projectsData;
