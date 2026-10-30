import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  return (
    <div className='py-3 px-6 max-w-7xl mx-auto'>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='black' />}>
        <BreadcrumbItem>
          <Link to='/'>Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to='/'>Products</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link to='#' className='  whitespace-nowrap text-sm'>{props.name}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
