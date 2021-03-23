import { application } from './app';

application.listen(process.env.PORT, () => {
    console.log('🚀 Server started on port 3333');
});
