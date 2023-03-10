import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { theme } from '../theme/myTheme';
import { CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const ArticleItem = ({ article }) => {
  return (
    <Box
      sx={{
        width: 'calc(100% - 90px) / 3',
        height: '530px',
        border: 1,
        borderColor: theme.palette.primaryColor.border,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Paper variant="outlined">
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            display: 'block',
            width: '100%',
            height: '217px',
            objectFit: 'cover',
          }}
        />
      </Paper>

      <Box sx={{ p: '25px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '20px' }}>
          <CiCalendar sx={{ width: '16px', height: '16px' }} />
          <Typography component="span" sx={{ ml: '8px', fontSize: '14px' }}>
            {article.publishedAt.split('T')[0]}
          </Typography>
        </Box>

        <Typography
          component="h2"
          sx={{ fontSize: '24px', fontWeight: '400', mb: '20px' }}
        >
          {article.title.length > 35
            ? article.title.slice(0, 35) + '...'
            : article.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: '16px', fontWeight: '400', mb: '20px' }}
          >
            {article.summary.length > 120
              ? article.summary.slice(0, 120) + '...'
              : article.summary}
          </Typography>

          <Box component="div">
            <Link
              to={`/article/${article.id}`}
              style={{
                textDecoration: 'none',
                color: theme.palette.primaryColor.main,
              }}
            >
              <Typography component="span" sx={{ mr: '8px' }}>
                Read more
              </Typography>

              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: theme.palette.primaryColor.main,
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
                />
              </svg>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
