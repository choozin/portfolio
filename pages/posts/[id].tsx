import Head from 'next/head';
import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';
import Date from '../../components/common/date'
import utilStyles from '../../styles/utils.module.css'
import { VideogameAsset } from '@material-ui/icons';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  // params intrinsically takes in a variable named "id" because that's 
  // what's inside of the [square brackets] in the filename.
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const Post = ({ postData }) => {
  console.log();
    return (
      <Layout 
        nav='navbar'
        pageStyle='thin'
        returnHome={true}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
}

export default Post;