/* tslint:disable */

export interface RootQueryType {
  allSitePage: SitePageConnection | null;
  allSitePlugin: SitePluginConnection | null;
  allDirectory: DirectoryConnection | null;
  allFile: FileConnection | null;
  allImageSharp: ImageSharpConnection | null;
  allMarkdownRemark: MarkdownRemarkConnection | null;
  allArticlesJson: ArticlesJsonConnection | null;
  allAuthorJson: AuthorJsonConnection | null;
  allContributionsJson: ContributionsJsonConnection | null;
  allExperienceJson: ExperienceJsonConnection | null;
  allProjectsJson: ProjectsJsonConnection | null;
  allReferencesJson: ReferencesJsonConnection | null;
  allReposJson: ReposJsonConnection | null;
  allSkillsJson: SkillsJsonConnection | null;
  allTechJson: TechJsonConnection | null;
  sitePage: SitePage | null;
  sitePlugin: SitePlugin | null;
  site: Site | null;
  directory: Directory | null;
  file: File | null;
  imageSharp: ImageSharp | null;
  markdownRemark: MarkdownRemark | null;
  articlesJson: ArticlesJson | null;
  authorJson: AuthorJson | null;
  contributionsJson: ContributionsJson | null;
  experienceJson: ExperienceJson | null;
  projectsJson: ProjectsJson | null;
  referencesJson: ReferencesJson | null;
  reposJson: ReposJson | null;
  skillsJson: SkillsJson | null;
  techJson: TechJson | null;
}

export interface AllSitePageRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePageConnectionSort | null;
  filter: filterSitePage | null;
}

export interface AllSitePluginRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePluginConnectionSort | null;
  filter: filterSitePlugin | null;
}

export interface AllDirectoryRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: directoryConnectionSort | null;
  filter: filterDirectory | null;
}

export interface AllFileRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: fileConnectionSort | null;
  filter: filterFile | null;
}

export interface AllImageSharpRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: imageSharpConnectionSort | null;
  filter: filterImageSharp | null;
}

export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: markdownRemarkConnectionSort | null;
  filter: filterMarkdownRemark | null;
}

export interface AllArticlesJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: articlesJsonConnectionSort | null;
  filter: filterArticlesJson | null;
}

export interface AllAuthorJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: authorJsonConnectionSort | null;
  filter: filterAuthorJson | null;
}

export interface AllContributionsJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: contributionsJsonConnectionSort | null;
  filter: filterContributionsJson | null;
}

export interface AllExperienceJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: experienceJsonConnectionSort | null;
  filter: filterExperienceJson | null;
}

export interface AllProjectsJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: projectsJsonConnectionSort | null;
  filter: filterProjectsJson | null;
}

export interface AllReferencesJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: referencesJsonConnectionSort | null;
  filter: filterReferencesJson | null;
}

export interface AllReposJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: reposJsonConnectionSort | null;
  filter: filterReposJson | null;
}

export interface AllSkillsJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: skillsJsonConnectionSort | null;
  filter: filterSkillsJson | null;
}

export interface AllTechJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: techJsonConnectionSort | null;
  filter: filterTechJson | null;
}

export interface SitePageRootQueryTypeArgs {
  layout: sitePageLayoutQueryString | null;
  jsonName: sitePageJsonNameQueryString | null;
  internalComponentName: sitePageInternalComponentNameQueryString | null;
  path: sitePagePathQueryString_2 | null;
  component: sitePageComponentQueryString | null;
  componentChunkName: sitePageComponentChunkNameQueryString | null;
  context: sitePageContextInputObject | null;
  updatedAt: sitePageUpdatedAtQueryInteger | null;
  pluginCreatorId: sitePagePluginCreatorIdQueryString | null;
  componentPath: sitePageComponentPathQueryString | null;
  id: sitePageIdQueryString_2 | null;
  internal: sitePageInternalInputObject_2 | null;
}

export interface SitePluginRootQueryTypeArgs {
  resolve: sitePluginResolveQueryString_2 | null;
  id: sitePluginIdQueryString_2 | null;
  name: sitePluginNameQueryString_2 | null;
  version: sitePluginVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs: sitePluginNodeApIsQueryList_2 | null;
  pluginFilepath: sitePluginPluginFilepathQueryString_2 | null;
  packageJson: sitePluginPackageJsonInputObject_2 | null;
  internal: sitePluginInternalInputObject_2 | null;
  _PARENT: sitePluginParentQueryString_2 | null;
}

export interface SiteRootQueryTypeArgs {
  siteMetadata: siteSiteMetadataInputObject_2 | null;
  port: sitePortQueryString_2 | null;
  host: siteHostQueryString_2 | null;
  mapping: siteMappingInputObject_2 | null;
  pathPrefix: sitePathPrefixQueryString_2 | null;
  polyfill: sitePolyfillQueryBoolean_2 | null;
  buildTime: siteBuildTimeQueryString_2 | null;
  id: siteIdQueryString_2 | null;
  internal: siteInternalInputObject_2 | null;
}

export interface DirectoryRootQueryTypeArgs {
  id: directoryIdQueryString_2 | null;
  internal: directoryInternalInputObject_2 | null;
  sourceInstanceName: directorySourceInstanceNameQueryString_2 | null;
  absolutePath: directoryAbsolutePathQueryString_2 | null;
  relativePath: directoryRelativePathQueryString_2 | null;
  extension: directoryExtensionQueryString_2 | null;
  size: directorySizeQueryInteger_2 | null;
  prettySize: directoryPrettySizeQueryString_2 | null;
  modifiedTime: directoryModifiedTimeQueryString_2 | null;
  accessTime: directoryAccessTimeQueryString_2 | null;
  changeTime: directoryChangeTimeQueryString_2 | null;
  birthTime: directoryBirthTimeQueryString_2 | null;
  root: directoryRootQueryString_2 | null;
  dir: directoryDirQueryString_2 | null;
  base: directoryBaseQueryString_2 | null;
  ext: directoryExtQueryString_2 | null;
  name: directoryNameQueryString_2 | null;
  relativeDirectory: directoryRelativeDirectoryQueryString_2 | null;
  dev: directoryDevQueryInteger_2 | null;
  mode: directoryModeQueryInteger_2 | null;
  nlink: directoryNlinkQueryInteger_2 | null;
  uid: directoryUidQueryInteger_2 | null;
  gid: directoryGidQueryInteger_2 | null;
  rdev: directoryRdevQueryInteger_2 | null;
  blksize: directoryBlksizeQueryInteger_2 | null;
  ino: directoryInoQueryInteger_2 | null;
  blocks: directoryBlocksQueryInteger_2 | null;
  atimeMs: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs: directoryBirthtimeMsQueryFloat_2 | null;
  atime: directoryAtimeQueryString_2 | null;
  mtime: directoryMtimeQueryString_2 | null;
  ctime: directoryCtimeQueryString_2 | null;
  birthtime: directoryBirthtimeQueryString_2 | null;
}

export interface FileRootQueryTypeArgs {
  id: fileIdQueryString_2 | null;
  internal: fileInternalInputObject_2 | null;
  sourceInstanceName: fileSourceInstanceNameQueryString_2 | null;
  absolutePath: fileAbsolutePathQueryString_2 | null;
  relativePath: fileRelativePathQueryString_2 | null;
  extension: fileExtensionQueryString_2 | null;
  size: fileSizeQueryInteger_2 | null;
  prettySize: filePrettySizeQueryString_2 | null;
  modifiedTime: fileModifiedTimeQueryString_2 | null;
  accessTime: fileAccessTimeQueryString_2 | null;
  changeTime: fileChangeTimeQueryString_2 | null;
  birthTime: fileBirthTimeQueryString_2 | null;
  root: fileRootQueryString_2 | null;
  dir: fileDirQueryString_2 | null;
  base: fileBaseQueryString_2 | null;
  ext: fileExtQueryString_2 | null;
  name: fileNameQueryString_2 | null;
  relativeDirectory: fileRelativeDirectoryQueryString_2 | null;
  dev: fileDevQueryInteger_2 | null;
  mode: fileModeQueryInteger_2 | null;
  nlink: fileNlinkQueryInteger_2 | null;
  uid: fileUidQueryInteger_2 | null;
  gid: fileGidQueryInteger_2 | null;
  rdev: fileRdevQueryInteger_2 | null;
  blksize: fileBlksizeQueryInteger_2 | null;
  ino: fileInoQueryInteger_2 | null;
  blocks: fileBlocksQueryInteger_2 | null;
  atimeMs: fileAtimeMsQueryFloat_2 | null;
  mtimeMs: fileMtimeMsQueryFloat_2 | null;
  ctimeMs: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileBirthtimeMsQueryFloat_2 | null;
  atime: fileAtimeQueryString_2 | null;
  mtime: fileMtimeQueryString_2 | null;
  ctime: fileCtimeQueryString_2 | null;
  birthtime: fileBirthtimeQueryString_2 | null;
}

export interface ImageSharpRootQueryTypeArgs {
  id: imageSharpIdQueryString_2 | null;
  internal: imageSharpInternalInputObject_2 | null;
  original: originalTypeName_3 | null;
  resolutions: resolutionsTypeName_3 | null;
  sizes: sizesTypeName_3 | null;
  responsiveResolution: responsiveResolutionTypeName_3 | null;
  responsiveSizes: responsiveSizesTypeName_3 | null;
  resize: resizeTypeName_3 | null;
}

export interface MarkdownRemarkRootQueryTypeArgs {
  id: markdownRemarkIdQueryString_2 | null;
  internal: markdownRemarkInternalInputObject_2 | null;
  frontmatter: markdownRemarkFrontmatterInputObject_2 | null;
  fileAbsolutePath: markdownRemarkFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkFieldsInputObject_2 | null;
  html: htmlQueryString_3 | null;
  excerpt: excerptQueryString_3 | null;
  headings: headingsQueryList_3 | null;
  timeToRead: timeToReadQueryInt_3 | null;
  tableOfContents: tableOfContentsQueryString_3 | null;
  wordCount: wordCountTypeName_3 | null;
}

export interface ArticlesJsonRootQueryTypeArgs {
  where: articlesJsonWhereQueryString_2 | null;
  link: articlesJsonLinkQueryString_2 | null;
  title: articlesJsonTitleQueryString_2 | null;
  date: articlesJsonDateQueryString_2 | null;
  id: articlesJsonIdQueryString_2 | null;
  internal: articlesJsonInternalInputObject_2 | null;
}

export interface AuthorJsonRootQueryTypeArgs {
  id: authorJsonIdQueryString_2 | null;
  bio: authorJsonBioQueryString_2 | null;
  avatar: authorJsonAvatarQueryString_2 | null;
  twitter: authorJsonTwitterQueryString_2 | null;
  github: authorJsonGithubQueryString_2 | null;
  internal: authorJsonInternalInputObject_2 | null;
}

export interface ContributionsJsonRootQueryTypeArgs {
  where: contributionsJsonWhereQueryString_2 | null;
  link: contributionsJsonLinkQueryString_2 | null;
  title: contributionsJsonTitleQueryString_2 | null;
  description: contributionsJsonDescriptionQueryString_2 | null;
  id: contributionsJsonIdQueryString_2 | null;
  internal: contributionsJsonInternalInputObject_2 | null;
}

export interface ExperienceJsonRootQueryTypeArgs {
  id: experienceJsonIdQueryString_2 | null;
  company: experienceJsonCompanyQueryString_2 | null;
  position: experienceJsonPositionQueryString_2 | null;
  from: experienceJsonFromQueryString_2 | null;
  to: experienceJsonToQueryString_2 | null;
  items: experienceJsonItemsQueryList_2 | null;
  internal: experienceJsonInternalInputObject_2 | null;
  color: experienceJsonColorQueryString_2 | null;
}

export interface ProjectsJsonRootQueryTypeArgs {
  where: projectsJsonWhereQueryString_2 | null;
  link: projectsJsonLinkQueryString_2 | null;
  title: projectsJsonTitleQueryString_2 | null;
  description: projectsJsonDescriptionQueryString_2 | null;
  id: projectsJsonIdQueryString_2 | null;
  internal: projectsJsonInternalInputObject_2 | null;
}

export interface ReferencesJsonRootQueryTypeArgs {
  thumb: referencesJsonThumbQueryString_2 | null;
  title: referencesJsonTitleQueryString_2 | null;
  name: referencesJsonNameQueryString_2 | null;
  content: referencesJsonContentQueryString_2 | null;
  when: referencesJsonWhenQueryString_2 | null;
  id: referencesJsonIdQueryString_2 | null;
  internal: referencesJsonInternalInputObject_2 | null;
}

export interface ReposJsonRootQueryTypeArgs {
  where: reposJsonWhereQueryString_2 | null;
  link: reposJsonLinkQueryString_2 | null;
  title: reposJsonTitleQueryString_2 | null;
  description: reposJsonDescriptionQueryString_2 | null;
  id: reposJsonIdQueryString_2 | null;
  internal: reposJsonInternalInputObject_2 | null;
}

export interface SkillsJsonRootQueryTypeArgs {
  id: skillsJsonIdQueryString_2 | null;
  label: skillsJsonLabelQueryString_2 | null;
  items: skillsJsonItemsQueryList_2 | null;
  internal: skillsJsonInternalInputObject_2 | null;
}

export interface TechJsonRootQueryTypeArgs {
  id: techJsonIdQueryString_2 | null;
  icon: techJsonIconQueryString_2 | null;
  color: techJsonColorQueryString_2 | null;
  label: techJsonLabelQueryString_2 | null;
  internal: techJsonInternalInputObject_2 | null;
}

export interface sitePageConnectionSort {
  fields: Array<SitePageConnectionSortByFieldsEnum>;
  order: sitePageConnectionSortOrderValues | null;
}

export type SitePageConnectionSortByFieldsEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "matchPath" | "component" | "componentChunkName" | "context____PARENT" | "context___slug" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";

export type sitePageConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePage {
  layout: sitePageConnectionLayoutQueryString | null;
  jsonName: sitePageConnectionJsonNameQueryString | null;
  internalComponentName: sitePageConnectionInternalComponentNameQueryString | null;
  path: sitePageConnectionPathQueryString_2 | null;
  component: sitePageConnectionComponentQueryString | null;
  componentChunkName: sitePageConnectionComponentChunkNameQueryString | null;
  context: sitePageConnectionContextInputObject | null;
  updatedAt: sitePageConnectionUpdatedAtQueryInteger | null;
  pluginCreatorId: sitePageConnectionPluginCreatorIdQueryString | null;
  componentPath: sitePageConnectionComponentPathQueryString | null;
  id: sitePageConnectionIdQueryString_2 | null;
  internal: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionLayoutQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextInputObject {
  _PARENT: sitePageConnectionContextParentQueryString | null;
  slug: sitePageConnectionContextSlugQueryString | null;
  tag: sitePageConnectionContextTagQueryString | null;
  skip: sitePageConnectionContextSkipQueryInteger | null;
}

export interface sitePageConnectionContextParentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest: sitePageConnectionInternalContentDigestQueryString_2 | null;
  owner: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface SitePageConnection {
  pageInfo: PageInfo;
  edges: Array<SitePageEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePageGroupConnectionConnection> | null;
}

export interface DistinctSitePageConnectionArgs {
  field: sitePageDistinctEnum | null;
}

export interface GroupSitePageConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePageGroupEnum | null;
}

export interface PageInfo {
  hasNextPage: boolean;
}

export interface SitePageEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface SitePage extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  layout: string | null;
  jsonName: string | null;
  internalComponentName: string | null;
  path: string | null;
  component: string | null;
  componentChunkName: string | null;
  context: context | null;
  updatedAt: number | null;
  pluginCreator: SitePlugin | null;
  pluginCreatorId: string | null;
  componentPath: string | null;
  internal: internal_17 | null;
}

export interface Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
}

export interface context {
  _PARENT: string | null;
  slug: string | null;
  tag: string | null;
  skip: number | null;
}

export interface SitePlugin extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  resolve: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_3 | null;
  nodeAPIs: Array<string> | null;
  pluginFilepath: string | null;
  packageJson: packageJson_2 | null;
  internal: internal_18 | null;
  _PARENT: string | null;
}

export interface pluginOptions_3 {
  plugins: Array<plugins_2> | null;
  _PARENT: string | null;
  name: string | null;
  path: string | null;
  trackingId: string | null;
  head: boolean | null;
  anonymize: boolean | null;
  respectDNT: boolean | null;
  maxWidth: number | null;
  backgroundColor: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  pathPrefix: string | null;
  ignoreFileExtensions: Array<string> | null;
  short_name: string | null;
  start_url: string | null;
  background_color: string | null;
  theme_color: string | null;
  display: string | null;
}

export interface plugins_2 {
  resolve: string | null;
  id: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_4 | null;
  _PARENT: string | null;
  pluginFilepath: string | null;
}

export interface pluginOptions_4 {
  maxWidth: number | null;
  backgroundColor: string | null;
  _PARENT: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  pathPrefix: string | null;
  ignoreFileExtensions: Array<string> | null;
}

export interface packageJson_2 {
  name: string | null;
  description: string | null;
  version: string | null;
  main: string | null;
  keywords: Array<string> | null;
  license: string | null;
  dependencies: Array<dependencies_2> | null;
  devDependencies: Array<devDependencies_2> | null;
  _PARENT: string | null;
}

export interface dependencies_2 {
  name: string | null;
  version: string | null;
  _PARENT: string | null;
}

export interface devDependencies_2 {
  name: string | null;
  version: string | null;
  _PARENT: string | null;
}

export interface internal_18 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface internal_17 {
  type: string | null;
  contentDigest: string | null;
  owner: string | null;
}

export type sitePageDistinctEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context____PARENT" | "context___slug" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";

export type sitePageGroupEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context____PARENT" | "context___slug" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";

export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePageGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePageGroupConnectionEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface sitePluginConnectionSort {
  fields: Array<SitePluginConnectionSortByFieldsEnum>;
  order: sitePluginConnectionSortOrderValues | null;
}

export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions____PARENT" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___anonymize" | "pluginOptions___respectDNT" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "packageJson____PARENT" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner" | "_PARENT";

export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePlugin {
  resolve: sitePluginConnectionResolveQueryString_2 | null;
  id: sitePluginConnectionIdQueryString_2 | null;
  name: sitePluginConnectionNameQueryString_2 | null;
  version: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs: sitePluginConnectionNodeApIsQueryList_2 | null;
  pluginFilepath: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal: sitePluginConnectionInternalInputObject_2 | null;
  _PARENT: sitePluginConnectionParentQueryString_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  _PARENT: sitePluginConnectionPluginOptionsParentQueryString_2 | null;
  name: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  path: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  trackingId: sitePluginConnectionPluginOptionsTrackingIdQueryString_2 | null;
  head: sitePluginConnectionPluginOptionsHeadQueryBoolean_2 | null;
  anonymize: sitePluginConnectionPluginOptionsAnonymizeQueryBoolean_2 | null;
  respectDNT: sitePluginConnectionPluginOptionsRespectDntQueryBoolean_2 | null;
  maxWidth: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  pathPrefix: sitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions: sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  short_name: sitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;
  theme_color: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in: Array<sitePluginConnectionPluginOptionsPluginsInputObject_2> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  _PARENT: sitePluginConnectionPluginOptionsPluginsParentQueryString_2 | null;
  pluginFilepath: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  _PARENT: sitePluginConnectionPluginOptionsPluginsPluginOptionsParentQueryString_2 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  pathPrefix: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions: sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsTrackingIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsHeadQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsAnonymizeQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsRespectDntQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  keywords: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
  license: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  _PARENT: sitePluginConnectionPackageJsonParentQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in: Array<sitePluginConnectionPackageJsonDependenciesInputObject_2> | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
  _PARENT: sitePluginConnectionPackageJsonDependenciesParentQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in: Array<sitePluginConnectionPackageJsonDevDependenciesInputObject_2> | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
  _PARENT: sitePluginConnectionPackageJsonDevDependenciesParentQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface SitePluginConnection {
  pageInfo: PageInfo;
  edges: Array<SitePluginEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePluginGroupConnectionConnection> | null;
}

export interface DistinctSitePluginConnectionArgs {
  field: sitePluginDistinctEnum | null;
}

export interface GroupSitePluginConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePluginGroupEnum | null;
}

export interface SitePluginEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions____PARENT" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___anonymize" | "pluginOptions___respectDNT" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson____PARENT" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "_PARENT";

export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions____PARENT" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___trackingId" | "pluginOptions___head" | "pluginOptions___anonymize" | "pluginOptions___respectDNT" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___ignoreFileExtensions" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson____PARENT" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "_PARENT";

export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePluginGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePluginGroupConnectionEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export interface directoryConnectionSort {
  fields: Array<DirectoryConnectionSortByFieldsEnum>;
  order: directoryConnectionSortOrderValues | null;
}

export type DirectoryConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type directoryConnectionSortOrderValues = "ASC" | "DESC";

export interface filterDirectory {
  id: directoryConnectionIdQueryString_2 | null;
  internal: directoryConnectionInternalInputObject_2 | null;
  sourceInstanceName: directoryConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath: directoryConnectionAbsolutePathQueryString_2 | null;
  relativePath: directoryConnectionRelativePathQueryString_2 | null;
  extension: directoryConnectionExtensionQueryString_2 | null;
  size: directoryConnectionSizeQueryInteger_2 | null;
  prettySize: directoryConnectionPrettySizeQueryString_2 | null;
  modifiedTime: directoryConnectionModifiedTimeQueryString_2 | null;
  accessTime: directoryConnectionAccessTimeQueryString_2 | null;
  changeTime: directoryConnectionChangeTimeQueryString_2 | null;
  birthTime: directoryConnectionBirthTimeQueryString_2 | null;
  root: directoryConnectionRootQueryString_2 | null;
  dir: directoryConnectionDirQueryString_2 | null;
  base: directoryConnectionBaseQueryString_2 | null;
  ext: directoryConnectionExtQueryString_2 | null;
  name: directoryConnectionNameQueryString_2 | null;
  relativeDirectory: directoryConnectionRelativeDirectoryQueryString_2 | null;
  dev: directoryConnectionDevQueryInteger_2 | null;
  mode: directoryConnectionModeQueryInteger_2 | null;
  nlink: directoryConnectionNlinkQueryInteger_2 | null;
  uid: directoryConnectionUidQueryInteger_2 | null;
  gid: directoryConnectionGidQueryInteger_2 | null;
  rdev: directoryConnectionRdevQueryInteger_2 | null;
  blksize: directoryConnectionBlksizeQueryInteger_2 | null;
  ino: directoryConnectionInoQueryInteger_2 | null;
  blocks: directoryConnectionBlocksQueryInteger_2 | null;
  atimeMs: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs: directoryConnectionBirthtimeMsQueryFloat_2 | null;
  atime: directoryConnectionAtimeQueryString_2 | null;
  mtime: directoryConnectionMtimeQueryString_2 | null;
  ctime: directoryConnectionCtimeQueryString_2 | null;
  birthtime: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest: directoryConnectionInternalContentDigestQueryString_2 | null;
  type: directoryConnectionInternalTypeQueryString_2 | null;
  owner: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryConnectionAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface DirectoryConnection {
  pageInfo: PageInfo;
  edges: Array<DirectoryEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<directoryGroupConnectionConnection> | null;
}

export interface DistinctDirectoryConnectionArgs {
  field: directoryDistinctEnum | null;
}

export interface GroupDirectoryConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: directoryGroupEnum | null;
}

export interface DirectoryEdge {
  node: Directory | null;
  next: Directory | null;
  previous: Directory | null;
}

export interface Directory extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_19 | null;
  sourceInstanceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: number | null;
  prettySize: string | null;
  modifiedTime: string | null;
  accessTime: string | null;
  changeTime: string | null;
  birthTime: string | null;
  root: string | null;
  dir: string | null;
  base: string | null;
  ext: string | null;
  name: string | null;
  relativeDirectory: string | null;
  dev: number | null;
  mode: number | null;
  nlink: number | null;
  uid: number | null;
  gid: number | null;
  rdev: number | null;
  blksize: string | null;
  ino: number | null;
  blocks: number | null;
  atimeMs: number | null;
  mtimeMs: number | null;
  ctimeMs: number | null;
  birthtimeMs: number | null;
  atime: string | null;
  mtime: string | null;
  ctime: string | null;
  birthtime: string | null;
}

export interface ModifiedTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AccessTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface ChangeTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthTimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BlksizeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface MtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface CtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthtimeDirectoryArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface internal_19 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export type directoryDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type directoryGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<directoryGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface directoryGroupConnectionEdge {
  node: Directory | null;
  next: Directory | null;
  previous: Directory | null;
}

export interface fileConnectionSort {
  fields: Array<FileConnectionSortByFieldsEnum>;
  order: fileConnectionSortOrderValues | null;
}

export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type fileConnectionSortOrderValues = "ASC" | "DESC";

export interface filterFile {
  id: fileConnectionIdQueryString_2 | null;
  internal: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath: fileConnectionRelativePathQueryString_2 | null;
  extension: fileConnectionExtensionQueryString_2 | null;
  size: fileConnectionSizeQueryInteger_2 | null;
  prettySize: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime: fileConnectionAccessTimeQueryString_2 | null;
  changeTime: fileConnectionChangeTimeQueryString_2 | null;
  birthTime: fileConnectionBirthTimeQueryString_2 | null;
  root: fileConnectionRootQueryString_2 | null;
  dir: fileConnectionDirQueryString_2 | null;
  base: fileConnectionBaseQueryString_2 | null;
  ext: fileConnectionExtQueryString_2 | null;
  name: fileConnectionNameQueryString_2 | null;
  relativeDirectory: fileConnectionRelativeDirectoryQueryString_2 | null;
  dev: fileConnectionDevQueryInteger_2 | null;
  mode: fileConnectionModeQueryInteger_2 | null;
  nlink: fileConnectionNlinkQueryInteger_2 | null;
  uid: fileConnectionUidQueryInteger_2 | null;
  gid: fileConnectionGidQueryInteger_2 | null;
  rdev: fileConnectionRdevQueryInteger_2 | null;
  blksize: fileConnectionBlksizeQueryInteger_2 | null;
  ino: fileConnectionInoQueryInteger_2 | null;
  blocks: fileConnectionBlocksQueryInteger_2 | null;
  atimeMs: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime: fileConnectionAtimeQueryString_2 | null;
  mtime: fileConnectionMtimeQueryString_2 | null;
  ctime: fileConnectionCtimeQueryString_2 | null;
  birthtime: fileConnectionBirthtimeQueryString_2 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest: fileConnectionInternalContentDigestQueryString_2 | null;
  mediaType: fileConnectionInternalMediaTypeQueryString_2 | null;
  type: fileConnectionInternalTypeQueryString_2 | null;
  owner: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface FileConnection {
  pageInfo: PageInfo;
  edges: Array<FileEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<fileGroupConnectionConnection> | null;
}

export interface DistinctFileConnectionArgs {
  field: fileDistinctEnum | null;
}

export interface GroupFileConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: fileGroupEnum | null;
}

export interface FileEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface File extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  childrenArticlesJson: Array<ArticlesJson> | null;
  childrenAuthorJson: Array<AuthorJson> | null;
  childrenContributionsJson: Array<ContributionsJson> | null;
  childrenExperienceJson: Array<ExperienceJson> | null;
  childProjectsJson: ProjectsJson | null;
  childrenReferencesJson: Array<ReferencesJson> | null;
  childrenReposJson: Array<ReposJson> | null;
  childrenSkillsJson: Array<SkillsJson> | null;
  childrenTechJson: Array<TechJson> | null;
  childMarkdownRemark: MarkdownRemark | null;
  childImageSharp: ImageSharp | null;
  internal: internal_20 | null;
  sourceInstanceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: number | null;
  prettySize: string | null;
  modifiedTime: string | null;
  accessTime: string | null;
  changeTime: string | null;
  birthTime: string | null;
  root: string | null;
  dir: string | null;
  base: string | null;
  ext: string | null;
  name: string | null;
  relativeDirectory: string | null;
  dev: number | null;
  mode: number | null;
  nlink: number | null;
  uid: number | null;
  gid: number | null;
  rdev: number | null;
  blksize: string | null;
  ino: number | null;
  blocks: number | null;
  atimeMs: number | null;
  mtimeMs: number | null;
  ctimeMs: number | null;
  birthtimeMs: number | null;
  atime: string | null;
  mtime: string | null;
  ctime: string | null;
  birthtime: string | null;
}

export interface ModifiedTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AccessTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface ChangeTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BlksizeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface AtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface MtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface CtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BirthtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface ArticlesJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  where: string | null;
  link: string | null;
  title: string | null;
  date: string | null;
  internal: internal_21 | null;
}

export interface internal_21 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface AuthorJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  bio: string | null;
  avatar: File | null;
  twitter: string | null;
  github: string | null;
  internal: internal_22 | null;
}

export interface internal_22 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ContributionsJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  where: string | null;
  link: string | null;
  title: string | null;
  description: string | null;
  internal: internal_23 | null;
}

export interface internal_23 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ExperienceJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  company: string | null;
  position: string | null;
  from: string | null;
  to: string | null;
  items: Array<items_3> | null;
  internal: internal_24 | null;
  color: string | null;
}

export interface items_3 {
  link: string | null;
  label: string | null;
  description: string | null;
  _PARENT: string | null;
  tech: Array<TechJson> | null;
}

export interface TechJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  icon: string | null;
  color: string | null;
  label: string | null;
  internal: internal_25 | null;
}

export interface internal_25 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface internal_24 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ProjectsJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  where: string | null;
  link: string | null;
  title: string | null;
  description: string | null;
  internal: internal_26 | null;
}

export interface internal_26 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ReferencesJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  thumb: string | null;
  title: string | null;
  name: string | null;
  content: string | null;
  when: string | null;
  internal: internal_27 | null;
}

export interface internal_27 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ReposJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  where: string | null;
  link: string | null;
  title: string | null;
  description: string | null;
  internal: internal_28 | null;
}

export interface internal_28 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface SkillsJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  label: string | null;
  items: Array<items_4> | null;
  internal: internal_29 | null;
}

export interface items_4 {
  label: string | null;
  icon: string | null;
  description: string | null;
  _PARENT: string | null;
}

export interface internal_29 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface MarkdownRemark extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_30 | null;
  frontmatter: frontmatter_2 | null;
  fileAbsolutePath: string | null;
  fields: fields_2 | null;
  html: string | null;
  excerpt: string | null;
  headings: Array<MarkdownHeading> | null;
  timeToRead: number | null;
  tableOfContents: string | null;
  wordCount: wordCount | null;
}

export interface ExcerptMarkdownRemarkArgs {
  pruneLength: number | null;
}

export interface HeadingsMarkdownRemarkArgs {
  depth: HeadingLevels | null;
}

export interface internal_30 {
  content: string | null;
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
  fieldOwners: fieldOwners_2 | null;
}

export interface fieldOwners_2 {
  slug: string | null;
}

export interface frontmatter_2 {
  title: string | null;
  createdDate: string | null;
  updatedDate: string | null;
  author: AuthorJson | null;
  tags: Array<string> | null;
  draft: boolean | null;
  _PARENT: string | null;
  parent: string | null;
  image: File | null;
}

export interface CreatedDatefrontmatter_2Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface UpdatedDatefrontmatter_2Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface fields_2 {
  slug: string | null;
}

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface MarkdownHeading {
  value: string | null;
  depth: number | null;
}

export interface wordCount {
  paragraphs: number | null;
  sentences: number | null;
  words: number | null;
}

export interface ImageSharp extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_31 | null;
  original: ImageSharpOriginal | null;
  resolutions: ImageSharpResolutions | null;
  sizes: ImageSharpSizes | null;
  responsiveResolution: ImageSharpResponsiveResolution | null;
  responsiveSizes: ImageSharpResponsiveSizes | null;
  resize: ImageSharpResize | null;
}

export interface ResolutionsImageSharpArgs {
  width: number | null;
  height: number | null;
  jpegProgressive: boolean | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface SizesImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  jpegProgressive: boolean | null;
  duotone: DuotoneGradient | null;
  traceSVG: Potrace | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResponsiveResolutionImageSharpArgs {
  width: number | null;
  height: number | null;
  jpegProgressive: boolean | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResponsiveSizesImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  jpegProgressive: boolean | null;
  duotone: DuotoneGradient | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResizeImageSharpArgs {
  width: number | null;
  height: number | null;
  quality: number | null;
  jpegProgressive: boolean | null;
  pngCompressionLevel: number | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  base64: boolean | null;
  traceSVG: Potrace | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface internal_31 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ImageSharpOriginal {
  width: number | null;
  height: number | null;
  src: string | null;
}

export interface DuotoneGradient {
  highlight: string | null;
  shadow: string | null;
}

export interface Potrace {
  turnPolicy: PotraceTurnPolicy | null;
  turdSize: number | null;
  alphaMax: number | null;
  optCurve: boolean | null;
  optTolerance: number | null;
  threshold: number | null;
  blackOnWhite: boolean | null;
  color: string | null;
  background: string | null;
}

export type PotraceTurnPolicy = "TURNPOLICY_BLACK" | "TURNPOLICY_WHITE" | "TURNPOLICY_LEFT" | "TURNPOLICY_RIGHT" | "TURNPOLICY_MINORITY" | "TURNPOLICY_MAJORITY";

export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";

export type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";

export interface ImageSharpResolutions {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  originalName: string | null;
}

export interface ImageSharpSizes {
  base64: string | null;
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string | null;
  originalImg: string | null;
  originalName: string | null;
}

export interface ImageSharpResponsiveResolution {
  base64: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  originalName: string | null;
}

export interface ImageSharpResponsiveSizes {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
  originalImg: string | null;
  originalName: string | null;
}

export interface ImageSharpResize {
  src: string | null;
  tracedSVG: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: number | null;
  originalName: string | null;
}

export interface internal_20 {
  contentDigest: string | null;
  mediaType: string | null;
  type: string | null;
  owner: string | null;
}

export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export interface fileGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<fileGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface fileGroupConnectionEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface imageSharpConnectionSort {
  fields: Array<ImageSharpConnectionSortByFieldsEnum>;
  order: imageSharpConnectionSortOrderValues | null;
}

export type ImageSharpConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "original___width" | "original___height" | "original___src" | "resolutions___base64" | "resolutions___tracedSVG" | "resolutions___aspectRatio" | "resolutions___width" | "resolutions___height" | "resolutions___src" | "resolutions___srcSet" | "resolutions___srcWebp" | "resolutions___srcSetWebp" | "resolutions___originalName" | "sizes___base64" | "sizes___tracedSVG" | "sizes___aspectRatio" | "sizes___src" | "sizes___srcSet" | "sizes___srcWebp" | "sizes___srcSetWebp" | "sizes___sizes" | "sizes___originalImg" | "sizes___originalName" | "responsiveResolution___base64" | "responsiveResolution___aspectRatio" | "responsiveResolution___width" | "responsiveResolution___height" | "responsiveResolution___src" | "responsiveResolution___srcSet" | "responsiveResolution___originalName" | "responsiveSizes___base64" | "responsiveSizes___aspectRatio" | "responsiveSizes___src" | "responsiveSizes___srcSet" | "responsiveSizes___sizes" | "responsiveSizes___originalImg" | "responsiveSizes___originalName" | "resize___src" | "resize___tracedSVG" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName";

export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";

export interface filterImageSharp {
  id: imageSharpConnectionIdQueryString_2 | null;
  internal: imageSharpConnectionInternalInputObject_2 | null;
  original: originalTypeName_4 | null;
  resolutions: resolutionsTypeName_4 | null;
  sizes: sizesTypeName_4 | null;
  responsiveResolution: responsiveResolutionTypeName_4 | null;
  responsiveSizes: responsiveSizesTypeName_4 | null;
  resize: resizeTypeName_4 | null;
}

export interface imageSharpConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest: imageSharpConnectionInternalContentDigestQueryString_2 | null;
  type: imageSharpConnectionInternalTypeQueryString_2 | null;
  owner: imageSharpConnectionInternalOwnerQueryString_2 | null;
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface originalTypeName_4 {
  width: originalWidthQueryFloat_4 | null;
  height: originalHeightQueryFloat_4 | null;
  src: originalSrcQueryString_4 | null;
}

export interface originalWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface originalHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface originalSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsTypeName_4 {
  base64: resolutionsBase64QueryString_4 | null;
  tracedSVG: resolutionsTracedSvgQueryString_4 | null;
  aspectRatio: resolutionsAspectRatioQueryFloat_4 | null;
  width: resolutionsWidthQueryFloat_4 | null;
  height: resolutionsHeightQueryFloat_4 | null;
  src: resolutionsSrcQueryString_4 | null;
  srcSet: resolutionsSrcSetQueryString_4 | null;
  srcWebp: resolutionsSrcWebpQueryString_4 | null;
  srcSetWebp: resolutionsSrcSetWebpQueryString_4 | null;
  originalName: resolutionsOriginalNameQueryString_4 | null;
}

export interface resolutionsBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesTypeName_4 {
  base64: sizesBase64QueryString_4 | null;
  tracedSVG: sizesTracedSvgQueryString_4 | null;
  aspectRatio: sizesAspectRatioQueryFloat_4 | null;
  src: sizesSrcQueryString_4 | null;
  srcSet: sizesSrcSetQueryString_4 | null;
  srcWebp: sizesSrcWebpQueryString_4 | null;
  srcSetWebp: sizesSrcSetWebpQueryString_4 | null;
  sizes: sizesSizesQueryString_4 | null;
  originalImg: sizesOriginalImgQueryString_4 | null;
  originalName: sizesOriginalNameQueryString_4 | null;
}

export interface sizesBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface sizesSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcSetWebpQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSizesQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesOriginalImgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionTypeName_4 {
  base64: responsiveResolutionBase64QueryString_4 | null;
  aspectRatio: responsiveResolutionAspectRatioQueryFloat_4 | null;
  width: responsiveResolutionWidthQueryFloat_4 | null;
  height: responsiveResolutionHeightQueryFloat_4 | null;
  src: responsiveResolutionSrcQueryString_4 | null;
  srcSet: responsiveResolutionSrcSetQueryString_4 | null;
  originalName: responsiveResolutionOriginalNameQueryString_4 | null;
}

export interface responsiveResolutionBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesTypeName_4 {
  base64: responsiveSizesBase64QueryString_4 | null;
  aspectRatio: responsiveSizesAspectRatioQueryFloat_4 | null;
  src: responsiveSizesSrcQueryString_4 | null;
  srcSet: responsiveSizesSrcSetQueryString_4 | null;
  sizes: responsiveSizesSizesQueryString_4 | null;
  originalImg: responsiveSizesOriginalImgQueryString_4 | null;
  originalName: responsiveSizesOriginalNameQueryString_4 | null;
}

export interface responsiveSizesBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveSizesSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSizesQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalImgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTypeName_4 {
  src: resizeSrcQueryString_4 | null;
  tracedSVG: resizeTracedSvgQueryString_4 | null;
  width: resizeWidthQueryInt_4 | null;
  height: resizeHeightQueryInt_4 | null;
  aspectRatio: resizeAspectRatioQueryFloat_4 | null;
  originalName: resizeOriginalNameQueryString_4 | null;
}

export interface resizeSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTracedSvgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeWidthQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeHeightQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ImageSharpConnection {
  pageInfo: PageInfo;
  edges: Array<ImageSharpEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<imageSharpGroupConnectionConnection> | null;
}

export interface DistinctImageSharpConnectionArgs {
  field: imageSharpDistinctEnum | null;
}

export interface GroupImageSharpConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: imageSharpGroupEnum | null;
}

export interface ImageSharpEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export type imageSharpDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type imageSharpGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<imageSharpGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface imageSharpGroupConnectionEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export interface markdownRemarkConnectionSort {
  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum>;
  order: markdownRemarkConnectionSortOrderValues | null;
}

export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___image" | "fileAbsolutePath" | "fields___slug" | "html" | "excerpt" | "headings" | "timeToRead" | "tableOfContents" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words";

export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";

export interface filterMarkdownRemark {
  id: markdownRemarkConnectionIdQueryString_2 | null;
  internal: markdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter: markdownRemarkConnectionFrontmatterInputObject_2 | null;
  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkConnectionFieldsInputObject_2 | null;
  html: htmlQueryString_4 | null;
  excerpt: excerptQueryString_4 | null;
  headings: headingsQueryList_4 | null;
  timeToRead: timeToReadQueryInt_4 | null;
  tableOfContents: tableOfContentsQueryString_4 | null;
  wordCount: wordCountTypeName_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content: markdownRemarkConnectionInternalContentQueryString_2 | null;
  contentDigest: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  type: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  owner: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  createdDate: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;
  draft: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
  _PARENT: markdownRemarkConnectionFrontmatterParentQueryString_3 | null;
  parent: markdownRemarkConnectionFrontmatterParentQueryString_4 | null;
  image: markdownRemarkConnectionFrontmatterImageQueryString_2 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug: markdownRemarkConnectionFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface htmlQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface excerptQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsQueryList_4 {
  value: headingsListElemValueQueryString_4 | null;
  depth: headingsListElemDepthQueryInt_4 | null;
  in: Array<markdownHeadingInputObject_4> | null;
}

export interface headingsListElemValueQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsListElemDepthQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface markdownHeadingInputObject_4 {
  value: string | null;
  depth: number | null;
}

export interface timeToReadQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface tableOfContentsQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface wordCountTypeName_4 {
  paragraphs: wordCountParagraphsQueryInt_4 | null;
  sentences: wordCountSentencesQueryInt_4 | null;
  words: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface wordCountSentencesQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface wordCountWordsQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface MarkdownRemarkConnection {
  pageInfo: PageInfo;
  edges: Array<MarkdownRemarkEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<markdownRemarkGroupConnectionConnection> | null;
}

export interface DistinctMarkdownRemarkConnectionArgs {
  field: markdownRemarkDistinctEnum | null;
}

export interface GroupMarkdownRemarkConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: markdownRemarkGroupEnum | null;
}

export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___image" | "fileAbsolutePath" | "fields___slug";

export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___image" | "fileAbsolutePath" | "fields___slug";

export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<markdownRemarkGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface markdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export interface articlesJsonConnectionSort {
  fields: Array<ArticlesJsonConnectionSortByFieldsEnum>;
  order: articlesJsonConnectionSortOrderValues | null;
}

export type ArticlesJsonConnectionSortByFieldsEnum = "where" | "link" | "title" | "date" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type articlesJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterArticlesJson {
  where: articlesJsonConnectionWhereQueryString_2 | null;
  link: articlesJsonConnectionLinkQueryString_2 | null;
  title: articlesJsonConnectionTitleQueryString_2 | null;
  date: articlesJsonConnectionDateQueryString_2 | null;
  id: articlesJsonConnectionIdQueryString_2 | null;
  internal: articlesJsonConnectionInternalInputObject_2 | null;
}

export interface articlesJsonConnectionWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionInternalInputObject_2 {
  contentDigest: articlesJsonConnectionInternalContentDigestQueryString_2 | null;
  type: articlesJsonConnectionInternalTypeQueryString_2 | null;
  owner: articlesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface articlesJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ArticlesJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ArticlesJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<articlesJsonGroupConnectionConnection> | null;
}

export interface DistinctArticlesJsonConnectionArgs {
  field: articlesJsonDistinctEnum | null;
}

export interface GroupArticlesJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: articlesJsonGroupEnum | null;
}

export interface ArticlesJsonEdge {
  node: ArticlesJson | null;
  next: ArticlesJson | null;
  previous: ArticlesJson | null;
}

export type articlesJsonDistinctEnum = "where" | "link" | "title" | "date" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type articlesJsonGroupEnum = "where" | "link" | "title" | "date" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface articlesJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<articlesJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface articlesJsonGroupConnectionEdge {
  node: ArticlesJson | null;
  next: ArticlesJson | null;
  previous: ArticlesJson | null;
}

export interface authorJsonConnectionSort {
  fields: Array<AuthorJsonConnectionSortByFieldsEnum>;
  order: authorJsonConnectionSortOrderValues | null;
}

export type AuthorJsonConnectionSortByFieldsEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type authorJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterAuthorJson {
  id: authorJsonConnectionIdQueryString_2 | null;
  bio: authorJsonConnectionBioQueryString_2 | null;
  avatar: authorJsonConnectionAvatarQueryString_2 | null;
  twitter: authorJsonConnectionTwitterQueryString_2 | null;
  github: authorJsonConnectionGithubQueryString_2 | null;
  internal: authorJsonConnectionInternalInputObject_2 | null;
}

export interface authorJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionBioQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionTwitterQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionGithubQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalInputObject_2 {
  contentDigest: authorJsonConnectionInternalContentDigestQueryString_2 | null;
  type: authorJsonConnectionInternalTypeQueryString_2 | null;
  owner: authorJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface authorJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface AuthorJsonConnection {
  pageInfo: PageInfo;
  edges: Array<AuthorJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<authorJsonGroupConnectionConnection> | null;
}

export interface DistinctAuthorJsonConnectionArgs {
  field: authorJsonDistinctEnum | null;
}

export interface GroupAuthorJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: authorJsonGroupEnum | null;
}

export interface AuthorJsonEdge {
  node: AuthorJson | null;
  next: AuthorJson | null;
  previous: AuthorJson | null;
}

export type authorJsonDistinctEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type authorJsonGroupEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface authorJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<authorJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface authorJsonGroupConnectionEdge {
  node: AuthorJson | null;
  next: AuthorJson | null;
  previous: AuthorJson | null;
}

export interface contributionsJsonConnectionSort {
  fields: Array<ContributionsJsonConnectionSortByFieldsEnum>;
  order: contributionsJsonConnectionSortOrderValues | null;
}

export type ContributionsJsonConnectionSortByFieldsEnum = "where" | "link" | "title" | "description" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type contributionsJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterContributionsJson {
  where: contributionsJsonConnectionWhereQueryString_2 | null;
  link: contributionsJsonConnectionLinkQueryString_2 | null;
  title: contributionsJsonConnectionTitleQueryString_2 | null;
  description: contributionsJsonConnectionDescriptionQueryString_2 | null;
  id: contributionsJsonConnectionIdQueryString_2 | null;
  internal: contributionsJsonConnectionInternalInputObject_2 | null;
}

export interface contributionsJsonConnectionWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionInternalInputObject_2 {
  contentDigest: contributionsJsonConnectionInternalContentDigestQueryString_2 | null;
  type: contributionsJsonConnectionInternalTypeQueryString_2 | null;
  owner: contributionsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface contributionsJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ContributionsJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ContributionsJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<contributionsJsonGroupConnectionConnection> | null;
}

export interface DistinctContributionsJsonConnectionArgs {
  field: contributionsJsonDistinctEnum | null;
}

export interface GroupContributionsJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: contributionsJsonGroupEnum | null;
}

export interface ContributionsJsonEdge {
  node: ContributionsJson | null;
  next: ContributionsJson | null;
  previous: ContributionsJson | null;
}

export type contributionsJsonDistinctEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type contributionsJsonGroupEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface contributionsJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<contributionsJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface contributionsJsonGroupConnectionEdge {
  node: ContributionsJson | null;
  next: ContributionsJson | null;
  previous: ContributionsJson | null;
}

export interface experienceJsonConnectionSort {
  fields: Array<ExperienceJsonConnectionSortByFieldsEnum>;
  order: experienceJsonConnectionSortOrderValues | null;
}

export type ExperienceJsonConnectionSortByFieldsEnum = "id" | "company" | "position" | "from" | "to" | "items" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "color";

export type experienceJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterExperienceJson {
  id: experienceJsonConnectionIdQueryString_2 | null;
  company: experienceJsonConnectionCompanyQueryString_2 | null;
  position: experienceJsonConnectionPositionQueryString_2 | null;
  from: experienceJsonConnectionFromQueryString_2 | null;
  to: experienceJsonConnectionToQueryString_2 | null;
  items: experienceJsonConnectionItemsQueryList_2 | null;
  internal: experienceJsonConnectionInternalInputObject_2 | null;
  color: experienceJsonConnectionColorQueryString_2 | null;
}

export interface experienceJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionCompanyQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionFromQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionToQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionItemsQueryList_2 {
  in: Array<experienceJsonConnectionItemsInputObject_2> | null;
}

export interface experienceJsonConnectionItemsInputObject_2 {
  link: experienceJsonConnectionItemsLinkQueryString_2 | null;
  label: experienceJsonConnectionItemsLabelQueryString_2 | null;
  description: experienceJsonConnectionItemsDescriptionQueryString_2 | null;
  _PARENT: experienceJsonConnectionItemsParentQueryString_2 | null;
  tech: experienceJsonConnectionItemsTechQueryList_2 | null;
}

export interface experienceJsonConnectionItemsLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionItemsLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionItemsDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionItemsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionItemsTechQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface experienceJsonConnectionInternalInputObject_2 {
  contentDigest: experienceJsonConnectionInternalContentDigestQueryString_2 | null;
  type: experienceJsonConnectionInternalTypeQueryString_2 | null;
  owner: experienceJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface experienceJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonConnectionColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ExperienceJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ExperienceJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<experienceJsonGroupConnectionConnection> | null;
}

export interface DistinctExperienceJsonConnectionArgs {
  field: experienceJsonDistinctEnum | null;
}

export interface GroupExperienceJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: experienceJsonGroupEnum | null;
}

export interface ExperienceJsonEdge {
  node: ExperienceJson | null;
  next: ExperienceJson | null;
  previous: ExperienceJson | null;
}

export type experienceJsonDistinctEnum = "id" | "company" | "position" | "from" | "to" | "items" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "color";

export type experienceJsonGroupEnum = "id" | "company" | "position" | "from" | "to" | "items" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "color";

export interface experienceJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<experienceJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface experienceJsonGroupConnectionEdge {
  node: ExperienceJson | null;
  next: ExperienceJson | null;
  previous: ExperienceJson | null;
}

export interface projectsJsonConnectionSort {
  fields: Array<ProjectsJsonConnectionSortByFieldsEnum>;
  order: projectsJsonConnectionSortOrderValues | null;
}

export type ProjectsJsonConnectionSortByFieldsEnum = "where" | "link" | "title" | "description" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type projectsJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterProjectsJson {
  where: projectsJsonConnectionWhereQueryString_2 | null;
  link: projectsJsonConnectionLinkQueryString_2 | null;
  title: projectsJsonConnectionTitleQueryString_2 | null;
  description: projectsJsonConnectionDescriptionQueryString_2 | null;
  id: projectsJsonConnectionIdQueryString_2 | null;
  internal: projectsJsonConnectionInternalInputObject_2 | null;
}

export interface projectsJsonConnectionWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionInternalInputObject_2 {
  contentDigest: projectsJsonConnectionInternalContentDigestQueryString_2 | null;
  type: projectsJsonConnectionInternalTypeQueryString_2 | null;
  owner: projectsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface projectsJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ProjectsJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ProjectsJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<projectsJsonGroupConnectionConnection> | null;
}

export interface DistinctProjectsJsonConnectionArgs {
  field: projectsJsonDistinctEnum | null;
}

export interface GroupProjectsJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: projectsJsonGroupEnum | null;
}

export interface ProjectsJsonEdge {
  node: ProjectsJson | null;
  next: ProjectsJson | null;
  previous: ProjectsJson | null;
}

export type projectsJsonDistinctEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type projectsJsonGroupEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface projectsJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<projectsJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface projectsJsonGroupConnectionEdge {
  node: ProjectsJson | null;
  next: ProjectsJson | null;
  previous: ProjectsJson | null;
}

export interface referencesJsonConnectionSort {
  fields: Array<ReferencesJsonConnectionSortByFieldsEnum>;
  order: referencesJsonConnectionSortOrderValues | null;
}

export type ReferencesJsonConnectionSortByFieldsEnum = "thumb" | "title" | "name" | "content" | "when" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type referencesJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterReferencesJson {
  thumb: referencesJsonConnectionThumbQueryString_2 | null;
  title: referencesJsonConnectionTitleQueryString_2 | null;
  name: referencesJsonConnectionNameQueryString_2 | null;
  content: referencesJsonConnectionContentQueryString_2 | null;
  when: referencesJsonConnectionWhenQueryString_2 | null;
  id: referencesJsonConnectionIdQueryString_2 | null;
  internal: referencesJsonConnectionInternalInputObject_2 | null;
}

export interface referencesJsonConnectionThumbQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionWhenQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionInternalInputObject_2 {
  contentDigest: referencesJsonConnectionInternalContentDigestQueryString_2 | null;
  type: referencesJsonConnectionInternalTypeQueryString_2 | null;
  owner: referencesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface referencesJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ReferencesJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ReferencesJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<referencesJsonGroupConnectionConnection> | null;
}

export interface DistinctReferencesJsonConnectionArgs {
  field: referencesJsonDistinctEnum | null;
}

export interface GroupReferencesJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: referencesJsonGroupEnum | null;
}

export interface ReferencesJsonEdge {
  node: ReferencesJson | null;
  next: ReferencesJson | null;
  previous: ReferencesJson | null;
}

export type referencesJsonDistinctEnum = "thumb" | "title" | "name" | "content" | "when" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type referencesJsonGroupEnum = "thumb" | "title" | "name" | "content" | "when" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface referencesJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<referencesJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface referencesJsonGroupConnectionEdge {
  node: ReferencesJson | null;
  next: ReferencesJson | null;
  previous: ReferencesJson | null;
}

export interface reposJsonConnectionSort {
  fields: Array<ReposJsonConnectionSortByFieldsEnum>;
  order: reposJsonConnectionSortOrderValues | null;
}

export type ReposJsonConnectionSortByFieldsEnum = "where" | "link" | "title" | "description" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type reposJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterReposJson {
  where: reposJsonConnectionWhereQueryString_2 | null;
  link: reposJsonConnectionLinkQueryString_2 | null;
  title: reposJsonConnectionTitleQueryString_2 | null;
  description: reposJsonConnectionDescriptionQueryString_2 | null;
  id: reposJsonConnectionIdQueryString_2 | null;
  internal: reposJsonConnectionInternalInputObject_2 | null;
}

export interface reposJsonConnectionWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionInternalInputObject_2 {
  contentDigest: reposJsonConnectionInternalContentDigestQueryString_2 | null;
  type: reposJsonConnectionInternalTypeQueryString_2 | null;
  owner: reposJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface reposJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ReposJsonConnection {
  pageInfo: PageInfo;
  edges: Array<ReposJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<reposJsonGroupConnectionConnection> | null;
}

export interface DistinctReposJsonConnectionArgs {
  field: reposJsonDistinctEnum | null;
}

export interface GroupReposJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: reposJsonGroupEnum | null;
}

export interface ReposJsonEdge {
  node: ReposJson | null;
  next: ReposJson | null;
  previous: ReposJson | null;
}

export type reposJsonDistinctEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type reposJsonGroupEnum = "where" | "link" | "title" | "description" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface reposJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<reposJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface reposJsonGroupConnectionEdge {
  node: ReposJson | null;
  next: ReposJson | null;
  previous: ReposJson | null;
}

export interface skillsJsonConnectionSort {
  fields: Array<SkillsJsonConnectionSortByFieldsEnum>;
  order: skillsJsonConnectionSortOrderValues | null;
}

export type SkillsJsonConnectionSortByFieldsEnum = "id" | "label" | "items" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type skillsJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSkillsJson {
  id: skillsJsonConnectionIdQueryString_2 | null;
  label: skillsJsonConnectionLabelQueryString_2 | null;
  items: skillsJsonConnectionItemsQueryList_2 | null;
  internal: skillsJsonConnectionInternalInputObject_2 | null;
}

export interface skillsJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionItemsQueryList_2 {
  in: Array<skillsJsonConnectionItemsInputObject_2> | null;
}

export interface skillsJsonConnectionItemsInputObject_2 {
  label: skillsJsonConnectionItemsLabelQueryString_2 | null;
  icon: skillsJsonConnectionItemsIconQueryString_2 | null;
  description: skillsJsonConnectionItemsDescriptionQueryString_2 | null;
  _PARENT: skillsJsonConnectionItemsParentQueryString_2 | null;
}

export interface skillsJsonConnectionItemsLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionItemsIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionItemsDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionItemsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionInternalInputObject_2 {
  contentDigest: skillsJsonConnectionInternalContentDigestQueryString_2 | null;
  type: skillsJsonConnectionInternalTypeQueryString_2 | null;
  owner: skillsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface skillsJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface SkillsJsonConnection {
  pageInfo: PageInfo;
  edges: Array<SkillsJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<skillsJsonGroupConnectionConnection> | null;
}

export interface DistinctSkillsJsonConnectionArgs {
  field: skillsJsonDistinctEnum | null;
}

export interface GroupSkillsJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: skillsJsonGroupEnum | null;
}

export interface SkillsJsonEdge {
  node: SkillsJson | null;
  next: SkillsJson | null;
  previous: SkillsJson | null;
}

export type skillsJsonDistinctEnum = "id" | "label" | "items" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type skillsJsonGroupEnum = "id" | "label" | "items" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface skillsJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<skillsJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface skillsJsonGroupConnectionEdge {
  node: SkillsJson | null;
  next: SkillsJson | null;
  previous: SkillsJson | null;
}

export interface techJsonConnectionSort {
  fields: Array<TechJsonConnectionSortByFieldsEnum>;
  order: techJsonConnectionSortOrderValues | null;
}

export type TechJsonConnectionSortByFieldsEnum = "id" | "icon" | "color" | "label" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type techJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterTechJson {
  id: techJsonConnectionIdQueryString_2 | null;
  icon: techJsonConnectionIconQueryString_2 | null;
  color: techJsonConnectionColorQueryString_2 | null;
  label: techJsonConnectionLabelQueryString_2 | null;
  internal: techJsonConnectionInternalInputObject_2 | null;
}

export interface techJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionInternalInputObject_2 {
  contentDigest: techJsonConnectionInternalContentDigestQueryString_2 | null;
  type: techJsonConnectionInternalTypeQueryString_2 | null;
  owner: techJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface techJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface TechJsonConnection {
  pageInfo: PageInfo;
  edges: Array<TechJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<techJsonGroupConnectionConnection> | null;
}

export interface DistinctTechJsonConnectionArgs {
  field: techJsonDistinctEnum | null;
}

export interface GroupTechJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: techJsonGroupEnum | null;
}

export interface TechJsonEdge {
  node: TechJson | null;
  next: TechJson | null;
  previous: TechJson | null;
}

export type techJsonDistinctEnum = "id" | "icon" | "color" | "label" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type techJsonGroupEnum = "id" | "icon" | "color" | "label" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface techJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<techJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface techJsonGroupConnectionEdge {
  node: TechJson | null;
  next: TechJson | null;
  previous: TechJson | null;
}

export interface sitePageLayoutQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePagePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextInputObject {
  _PARENT: sitePageContextParentQueryString | null;
  slug: sitePageContextSlugQueryString | null;
  tag: sitePageContextTagQueryString | null;
  skip: sitePageContextSkipQueryInteger | null;
}

export interface sitePageContextParentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageUpdatedAtQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalInputObject_2 {
  type: sitePageInternalTypeQueryString_2 | null;
  contentDigest: sitePageInternalContentDigestQueryString_2 | null;
  owner: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins: sitePluginPluginOptionsPluginsQueryList_2 | null;
  _PARENT: sitePluginPluginOptionsParentQueryString_2 | null;
  name: sitePluginPluginOptionsNameQueryString_2 | null;
  path: sitePluginPluginOptionsPathQueryString_2 | null;
  trackingId: sitePluginPluginOptionsTrackingIdQueryString_2 | null;
  head: sitePluginPluginOptionsHeadQueryBoolean_2 | null;
  anonymize: sitePluginPluginOptionsAnonymizeQueryBoolean_2 | null;
  respectDNT: sitePluginPluginOptionsRespectDntQueryBoolean_2 | null;
  maxWidth: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsBackgroundColorQueryString_3 | null;
  wrapperStyle: sitePluginPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  pathPrefix: sitePluginPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions: sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  short_name: sitePluginPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginPluginOptionsBackgroundColorQueryString_4 | null;
  theme_color: sitePluginPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginPluginOptionsDisplayQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in: Array<sitePluginPluginOptionsPluginsInputObject_2> | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  _PARENT: sitePluginPluginOptionsPluginsParentQueryString_2 | null;
  pluginFilepath: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  _PARENT: sitePluginPluginOptionsPluginsPluginOptionsParentQueryString_2 | null;
  wrapperStyle: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  linkImagesToOriginal: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  pathPrefix: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions: sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginPluginOptionsPluginsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsTrackingIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsHeadQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsAnonymizeQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsRespectDntQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name: sitePluginPackageJsonNameQueryString_2 | null;
  description: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginPackageJsonVersionQueryString_2 | null;
  main: sitePluginPackageJsonMainQueryString_2 | null;
  keywords: sitePluginPackageJsonKeywordsQueryList_2 | null;
  license: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  _PARENT: sitePluginPackageJsonParentQueryString_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in: Array<sitePluginPackageJsonDependenciesInputObject_2> | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
  _PARENT: sitePluginPackageJsonDependenciesParentQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDependenciesParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in: Array<sitePluginPackageJsonDevDependenciesInputObject_2> | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
  _PARENT: sitePluginPackageJsonDevDependenciesParentQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDevDependenciesParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest: sitePluginInternalContentDigestQueryString_2 | null;
  type: sitePluginInternalTypeQueryString_2 | null;
  owner: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  title: siteSiteMetadataTitleQueryString_2 | null;
  googleVerification: siteSiteMetadataGoogleVerificationQueryString_2 | null;
  disqus: siteSiteMetadataDisqusQueryString_2 | null;
  _PARENT: siteSiteMetadataParentQueryString_2 | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteSiteMetadataGoogleVerificationQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteSiteMetadataDisqusQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteSiteMetadataParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePortQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteHostQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteMappingInputObject_2 {
  MarkdownRemark_frontmatter_author: siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 | null;
  ExperienceJson_items_tech: siteMappingExperienceJsonItemsTechQueryString_2 | null;
  _PARENT: siteMappingParentQueryString_2 | null;
}

export interface siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteMappingExperienceJsonItemsTechQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteMappingParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest: siteInternalContentDigestQueryString_2 | null;
  type: siteInternalTypeQueryString_2 | null;
  owner: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface Site extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  siteMetadata: siteMetadata_2 | null;
  port: string | null;
  host: string | null;
  mapping: mapping_2 | null;
  pathPrefix: string | null;
  polyfill: boolean | null;
  buildTime: string | null;
  internal: internal_32 | null;
}

export interface PortSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface BuildTimeSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
  locale: string | null;
}

export interface siteMetadata_2 {
  title: string | null;
  googleVerification: string | null;
  disqus: string | null;
  _PARENT: string | null;
}

export interface mapping_2 {
  MarkdownRemark_frontmatter_author: string | null;
  ExperienceJson_items_tech: string | null;
  _PARENT: string | null;
}

export interface internal_32 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface directoryIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryInternalInputObject_2 {
  contentDigest: directoryInternalContentDigestQueryString_2 | null;
  type: directoryInternalTypeQueryString_2 | null;
  owner: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directorySourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directorySizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface directoryAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface directoryBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalInputObject_2 {
  contentDigest: fileInternalContentDigestQueryString_2 | null;
  mediaType: fileInternalMediaTypeQueryString_2 | null;
  type: fileInternalTypeQueryString_2 | null;
  owner: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface filePrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRelativeDirectoryQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileBlksizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileBlocksQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalInputObject_2 {
  contentDigest: imageSharpInternalContentDigestQueryString_2 | null;
  type: imageSharpInternalTypeQueryString_2 | null;
  owner: imageSharpInternalOwnerQueryString_2 | null;
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface originalTypeName_3 {
  width: originalWidthQueryFloat_3 | null;
  height: originalHeightQueryFloat_3 | null;
  src: originalSrcQueryString_3 | null;
}

export interface originalWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface originalHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface originalSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsTypeName_3 {
  base64: resolutionsBase64QueryString_3 | null;
  tracedSVG: resolutionsTracedSvgQueryString_3 | null;
  aspectRatio: resolutionsAspectRatioQueryFloat_3 | null;
  width: resolutionsWidthQueryFloat_3 | null;
  height: resolutionsHeightQueryFloat_3 | null;
  src: resolutionsSrcQueryString_3 | null;
  srcSet: resolutionsSrcSetQueryString_3 | null;
  srcWebp: resolutionsSrcWebpQueryString_3 | null;
  srcSetWebp: resolutionsSrcSetWebpQueryString_3 | null;
  originalName: resolutionsOriginalNameQueryString_3 | null;
}

export interface resolutionsBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface resolutionsSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resolutionsOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesTypeName_3 {
  base64: sizesBase64QueryString_3 | null;
  tracedSVG: sizesTracedSvgQueryString_3 | null;
  aspectRatio: sizesAspectRatioQueryFloat_3 | null;
  src: sizesSrcQueryString_3 | null;
  srcSet: sizesSrcSetQueryString_3 | null;
  srcWebp: sizesSrcWebpQueryString_3 | null;
  srcSetWebp: sizesSrcSetWebpQueryString_3 | null;
  sizes: sizesSizesQueryString_3 | null;
  originalImg: sizesOriginalImgQueryString_3 | null;
  originalName: sizesOriginalNameQueryString_3 | null;
}

export interface sizesBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface sizesSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSrcSetWebpQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesSizesQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesOriginalImgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sizesOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionTypeName_3 {
  base64: responsiveResolutionBase64QueryString_3 | null;
  aspectRatio: responsiveResolutionAspectRatioQueryFloat_3 | null;
  width: responsiveResolutionWidthQueryFloat_3 | null;
  height: responsiveResolutionHeightQueryFloat_3 | null;
  src: responsiveResolutionSrcQueryString_3 | null;
  srcSet: responsiveResolutionSrcSetQueryString_3 | null;
  originalName: responsiveResolutionOriginalNameQueryString_3 | null;
}

export interface responsiveResolutionBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesTypeName_3 {
  base64: responsiveSizesBase64QueryString_3 | null;
  aspectRatio: responsiveSizesAspectRatioQueryFloat_3 | null;
  src: responsiveSizesSrcQueryString_3 | null;
  srcSet: responsiveSizesSrcSetQueryString_3 | null;
  sizes: responsiveSizesSizesQueryString_3 | null;
  originalImg: responsiveSizesOriginalImgQueryString_3 | null;
  originalName: responsiveSizesOriginalNameQueryString_3 | null;
}

export interface responsiveSizesBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveSizesSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSizesQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalImgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTypeName_3 {
  src: resizeSrcQueryString_3 | null;
  tracedSVG: resizeTracedSvgQueryString_3 | null;
  width: resizeWidthQueryInt_3 | null;
  height: resizeHeightQueryInt_3 | null;
  aspectRatio: resizeAspectRatioQueryFloat_3 | null;
  originalName: resizeOriginalNameQueryString_3 | null;
}

export interface resizeSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTracedSvgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeWidthQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeHeightQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content: markdownRemarkInternalContentQueryString_2 | null;
  contentDigest: markdownRemarkInternalContentDigestQueryString_2 | null;
  type: markdownRemarkInternalTypeQueryString_2 | null;
  owner: markdownRemarkInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title: markdownRemarkFrontmatterTitleQueryString_2 | null;
  createdDate: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkFrontmatterTagsQueryList_2 | null;
  draft: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
  _PARENT: markdownRemarkFrontmatterParentQueryString_3 | null;
  parent: markdownRemarkFrontmatterParentQueryString_4 | null;
  image: markdownRemarkFrontmatterImageQueryString_2 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFieldsInputObject_2 {
  slug: markdownRemarkFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface htmlQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface excerptQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsQueryList_3 {
  value: headingsListElemValueQueryString_3 | null;
  depth: headingsListElemDepthQueryInt_3 | null;
  in: Array<markdownHeadingInputObject_3> | null;
}

export interface headingsListElemValueQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsListElemDepthQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface markdownHeadingInputObject_3 {
  value: string | null;
  depth: number | null;
}

export interface timeToReadQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface tableOfContentsQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface wordCountTypeName_3 {
  paragraphs: wordCountParagraphsQueryInt_3 | null;
  sentences: wordCountSentencesQueryInt_3 | null;
  words: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface wordCountSentencesQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface wordCountWordsQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface articlesJsonWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonInternalInputObject_2 {
  contentDigest: articlesJsonInternalContentDigestQueryString_2 | null;
  type: articlesJsonInternalTypeQueryString_2 | null;
  owner: articlesJsonInternalOwnerQueryString_2 | null;
}

export interface articlesJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface articlesJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonBioQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonTwitterQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonGithubQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalInputObject_2 {
  contentDigest: authorJsonInternalContentDigestQueryString_2 | null;
  type: authorJsonInternalTypeQueryString_2 | null;
  owner: authorJsonInternalOwnerQueryString_2 | null;
}

export interface authorJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonInternalInputObject_2 {
  contentDigest: contributionsJsonInternalContentDigestQueryString_2 | null;
  type: contributionsJsonInternalTypeQueryString_2 | null;
  owner: contributionsJsonInternalOwnerQueryString_2 | null;
}

export interface contributionsJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface contributionsJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonCompanyQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonPositionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonFromQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonToQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonItemsQueryList_2 {
  in: Array<experienceJsonItemsInputObject_2> | null;
}

export interface experienceJsonItemsInputObject_2 {
  link: experienceJsonItemsLinkQueryString_2 | null;
  label: experienceJsonItemsLabelQueryString_2 | null;
  description: experienceJsonItemsDescriptionQueryString_2 | null;
  _PARENT: experienceJsonItemsParentQueryString_2 | null;
  tech: experienceJsonItemsTechQueryList_2 | null;
}

export interface experienceJsonItemsLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonItemsLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonItemsDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonItemsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonItemsTechQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface experienceJsonInternalInputObject_2 {
  contentDigest: experienceJsonInternalContentDigestQueryString_2 | null;
  type: experienceJsonInternalTypeQueryString_2 | null;
  owner: experienceJsonInternalOwnerQueryString_2 | null;
}

export interface experienceJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface experienceJsonColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonInternalInputObject_2 {
  contentDigest: projectsJsonInternalContentDigestQueryString_2 | null;
  type: projectsJsonInternalTypeQueryString_2 | null;
  owner: projectsJsonInternalOwnerQueryString_2 | null;
}

export interface projectsJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface projectsJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonThumbQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonWhenQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonInternalInputObject_2 {
  contentDigest: referencesJsonInternalContentDigestQueryString_2 | null;
  type: referencesJsonInternalTypeQueryString_2 | null;
  owner: referencesJsonInternalOwnerQueryString_2 | null;
}

export interface referencesJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface referencesJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonWhereQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonLinkQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonInternalInputObject_2 {
  contentDigest: reposJsonInternalContentDigestQueryString_2 | null;
  type: reposJsonInternalTypeQueryString_2 | null;
  owner: reposJsonInternalOwnerQueryString_2 | null;
}

export interface reposJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface reposJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonItemsQueryList_2 {
  in: Array<skillsJsonItemsInputObject_2> | null;
}

export interface skillsJsonItemsInputObject_2 {
  label: skillsJsonItemsLabelQueryString_2 | null;
  icon: skillsJsonItemsIconQueryString_2 | null;
  description: skillsJsonItemsDescriptionQueryString_2 | null;
  _PARENT: skillsJsonItemsParentQueryString_2 | null;
}

export interface skillsJsonItemsLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonItemsIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonItemsDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonItemsParentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonInternalInputObject_2 {
  contentDigest: skillsJsonInternalContentDigestQueryString_2 | null;
  type: skillsJsonInternalTypeQueryString_2 | null;
  owner: skillsJsonInternalOwnerQueryString_2 | null;
}

export interface skillsJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface skillsJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonIconQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonLabelQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonInternalInputObject_2 {
  contentDigest: techJsonInternalContentDigestQueryString_2 | null;
  type: techJsonInternalTypeQueryString_2 | null;
  owner: techJsonInternalOwnerQueryString_2 | null;
}

export interface techJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface techJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}
