const PATHS = [
    '/3/search/movie',
    '/3/discover/movie',
    '/3/movie/{movie_id}',
    '/3/tv/{series_id}',
    '/3/search/tv',
    '/3/search/multi',
    '/3/search/person',
    '/3/configuration',
    '/3/tv/{series_id}/season/{season_number}',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}',
    '/3/discover/tv',
    '/3/movie/{movie_id}/images',
    '/3/tv/{series_id}/images',
    '/3/tv/{series_id}/season/{season_number}/images',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images',
    '/3/trending/all/{time_window}',
    '/3/trending/movie/{time_window}',
    '/3/trending/tv/{time_window}',
    '/3/movie/{movie_id}/account_states',
    '/3/tv/{series_id}/account_states',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states',
    '/3/trending/person/{time_window}',
    '/3/movie/{movie_id}/alternative_titles',
    '/3/movie/{movie_id}/changes',
    '/3/movie/{movie_id}/credits',
    '/3/movie/{movie_id}/external_ids',
    '/3/movie/{movie_id}/keywords',
    '/3/movie/{movie_id}/lists',
    '/3/movie/{movie_id}/recommendations',
    '/3/movie/{movie_id}/release_dates',
    '/3/movie/{movie_id}/reviews',
    '/3/movie/{movie_id}/similar',
    '/3/movie/{movie_id}/translations',
    '/3/movie/{movie_id}/videos',
    '/3/movie/{movie_id}/watch/providers',
    '/3/authentication/guest_session/new',
    '/3/authentication/token/new',
    '/3/find/{external_id}',
    '/3/person/{person_id}',
    '/3/person/{person_id}/changes',
    '/3/tv/{series_id}/changes',
    '/3/person/{person_id}/images',
    '/3/person/{person_id}/movie_credits',
    '/3/person/{person_id}/tv_credits',
    '/3/person/{person_id}/combined_credits',
    '/3/person/{person_id}/external_ids',
    '/3/person/{person_id}/tagged_images',
    '/3/person/{person_id}/translations',
    '/3/person/popular',
    '/3/movie/popular',
    '/3/movie/top_rated',
    '/3/movie/upcoming',
    '/3/movie/now_playing',
    '/3/tv/airing_today',
    '/3/tv/on_the_air',
    '/3/tv/popular',
    '/3/tv/top_rated',
    '/3/movie/latest',
    '/3/tv/latest',
    '/3/tv/{series_id}/aggregate_credits',
    '/3/tv/{series_id}/alternative_titles',
    '/3/tv/{series_id}/content_ratings',
    '/3/tv/{series_id}/credits',
    '/3/tv/{series_id}/episode_groups',
    '/3/tv/{series_id}/external_ids',
    '/3/tv/{series_id}/keywords',
    '/3/tv/{series_id}/recommendations',
    '/3/tv/{series_id}/reviews',
    '/3/tv/{series_id}/screened_theatrically',
    '/3/tv/{series_id}/similar',
    '/3/tv/{series_id}/translations',
    '/3/tv/{series_id}/videos',
    '/3/tv/{series_id}/watch/providers',
    '/3/tv/{series_id}/season/{season_number}/account_states',
    '/3/tv/{series_id}/season/{season_number}/aggregate_credits',
    '/3/tv/season/{season_id}/changes',
    '/3/tv/{series_id}/season/{season_number}/credits',
    '/3/tv/{series_id}/season/{season_number}/external_ids',
    '/3/tv/{series_id}/season/{season_number}/translations',
    '/3/tv/{series_id}/season/{season_number}/videos',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations',
    '/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos',
    '/3/account/{account_id}',
    '/3/account/{account_id}/lists',
    '/3/account/{account_id}/favorite/movies',
    '/3/account/{account_id}/favorite/tv',
    '/3/account/{account_id}/rated/movies',
    '/3/account/{account_id}/rated/tv',
    '/3/account/{account_id}/rated/tv/episodes',
    '/3/account/{account_id}/watchlist/movies',
    '/3/account/{account_id}/watchlist/tv',
    '/3/certification/movie/list',
    '/3/certification/tv/list',
    '/3/movie/changes',
    '/3/tv/changes',
    '/3/person/changes',
    '/3/collection/{collection_id}',
    '/3/collection/{collection_id}/images',
    '/3/collection/{collection_id}/translations',
    '/3/company/{company_id}',
    '/3/company/{company_id}/alternative_names',
    '/3/company/{company_id}/images',
    '/3/credit/{credit_id}',
    '/3/genre/movie/list',
    '/3/genre/tv/list',
    '/3/guest_session/{guest_session_id}/rated/movies',
    '/3/guest_session/{guest_session_id}/rated/tv',
    '/3/guest_session/{guest_session_id}/rated/tv/episodes',
    '/3/watch/providers/regions',
    '/3/watch/providers/movie',
    '/3/watch/providers/tv',
    '/3/keyword/{keyword_id}',
    '/3/keyword/{keyword_id}/movies',
    '/3/list/{list_id}',
    '/3/list/{list_id}/item_status',
    '/3/network/{network_id}',
    '/3/network/{network_id}/alternative_names',
    '/3/network/{network_id}/images',
    '/3/review/{review_id}',
    '/3/authentication',
    '/3/tv/{series_id}/season/{season_number}/watch/providers',
    '/3/configuration/countries',
    '/3/configuration/jobs',
    '/3/configuration/languages',
    '/3/configuration/primary_translations',
    '/3/configuration/timezones',
    '/3/person/latest',
    '/3/tv/episode/{episode_id}/changes',
    '/3/tv/episode_group/{tv_episode_group_id}',
    '/3/search/company',
    '/3/search/collection',
    '/3/search/keyword',
];

export { PATHS };
