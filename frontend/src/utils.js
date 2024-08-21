export const generateBaseURL = () => {
	const currentHost = window?.location?.host;
	const currentProtocol = window?.location?.protocol || "http:";
	const baseURL = `${currentProtocol}//${currentHost.replace(
		"3000",
		"8000",
	)}`;
	return baseURL;
};
