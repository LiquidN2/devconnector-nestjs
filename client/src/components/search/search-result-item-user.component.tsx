import React from 'react';

import { withUserBox } from '../with-user-box/with-user-box.component';
import SearchResultItemMenu from './search-result-item-menu.component';

const SearchResultItemUser = withUserBox(SearchResultItemMenu);

export default SearchResultItemUser;
