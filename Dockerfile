FROM node:16.2-slim

RUN sed -i s@/deb.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list \
&& sed -i s@/security.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list \
&& apt update \
&& apt install git -y \
&& apt clean \
&& yarn config set registry https://registry.npmmirror.com --global

WORKDIR /docs

RUN git clone https://github.com/Entertech/FTDocuments.git \
&& cd FTDocuments \
&& git checkout international

WORKDIR /docs/FTDocuments/MeetFlowtime 
RUN yarn add @docusaurus/theme-search-algolia \
&& yarn add @docusaurus/plugin-sitemap \
&& yarn install \
&& yarn build

RUN git config --global user.email "you@example.com" \
&& git config --global user.name "Your Name" \
&& cd .. && git add MeetFlowtime/package.json MeetFlowtime/yarn.lock \
&& git commit -m "nothing"

WORKDIR /docs

COPY ./start.sh .
COPY ./update.sh .

CMD ./start.sh
