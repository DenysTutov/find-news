import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { Box, InputBase, Paper, Typography } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { VscClose } from 'react-icons/vsc';

import { setSearchValue } from '../../redux/slices/filterSlice';
import { theme } from '../../theme/myTheme';

export const Search = () => {
  const dispatch = useDispatch();
  const [searchLocal, setSearchLocal] = useState('');
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const updateSearchValue = useMemo(
    () =>
      debounce(value => {
        dispatch(setSearchValue(value));
      }, 500),
    [dispatch]
  );

  const onChangeSearchLocal = event => {
    setSearchLocal(event.target.value);
    dispatch(updateSearchValue(event.target.value));
  };

  const onClearInput = () => {
    setSearchLocal('');
    dispatch(setSearchValue(''));
  };

  return (
    <Box
      component="div"
      mb={'45px'}
      sx={{
        borderBottom: 1,
        borderColor: theme.palette.primaryColor.border,
      }}
    >
      <Typography
        component="p"
        sx={{
          mb: '10px',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '19px',
        }}
      >
        Filter by keywords
      </Typography>

      <Paper
        component="div"
        sx={{
          p: '13px 20px',
          display: 'flex',
          alignItems: 'center',
          width: '600px',
          height: '50px',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
          border: 1,
          borderColor: theme.palette.primaryColor.border,
          mb: '40px',
        }}
      >
        <CiSearch style={{ width: '20px', height: '20px' }} />

        <InputBase
          placeholder="Enter search keyword"
          value={searchLocal}
          onChange={onChangeSearchLocal}
          type="text"
          sx={{
            ml: 1,
            flex: 1,
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
          }}
        />

        {searchLocal && (
          <VscClose
            onClick={onClearInput}
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              color: hover
                ? theme.palette.primaryColor.main
                : theme.palette.primaryColor.secondary,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </Paper>

      <Typography
        component="p"
        sx={{
          mb: '10px',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '19px',
        }}
      >
        Results:
      </Typography>
    </Box>
  );
};
