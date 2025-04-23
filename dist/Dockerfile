FROM jupyter/minimal-notebook
USER root
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* && \

 #   apt-get update -qq && \

  #  apt-get install -y --no-install-recommends \

   #     software-properties-common \

    #    gdebi-core \

     #   libapparmor1 \

      #  dirmngr \

       # gpg-agent \

        #strace \

        #lsof \

        #less



#RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9

#RUN add-apt-repository -y 'deb https://cloud.r-project.org/bin/linux/ubuntu jammy-cran40/'


#RUN apt-get update -qq -y && \

  #  apt install -y r-base r-base-core r-recommended


#ENV RSTUDIO_VERSION 1.2.1335

ENV RSTUDIO_VERSION 2024.12.1-563


#RUN wget --quiet https://download2.rstudio.org/server/jammy/amd64/rstudio-server-${RSTUDIO_VERSION}-amd64.deb && \

 #   gdebi -n rstudio-server-${RSTUDIO_VERSION}-amd64.deb && \

  #  rm rstudio-server-${RSTUDIO_VERSION}-amd64.deb


USER $NB_USER

#RUN /opt/conda/bin/conda install -c conda-forge jupyter-rsession-proxy

#RN /opt/conda/bin/conda install -c conda-forge jupyter-server-proxy


USER root


USER jovyan

ENV PATH="${PATH}:/usr/lib/rstudio-server/bin"


USER root



#RUN apt-get update --yes && \

 #   apt-get install --yes --quiet --no-install-recommends \

  #  curl \

   # iputils-ping \

#	build-essential \

 #   make \

  #  cmake \

   # g++ \

#    clang \

 #   htop \

  #  libopencv-dev \

   # && \

#    apt-get --quiet clean && rm -rf /var/lib/apt/lists/*



ENV CODE_VERSION=4.96.4

#RUN curl -fOL https://github.com/coder/code-server/releases/download/v$CODE_VERSION/code-server_${CODE_VERSION}_amd64.deb \

 #   && dpkg -i code-server_${CODE_VERSION}_amd64.deb \

  #  && rm -f code-server_${CODE_VERSION}_amd64.deb

#RUN /opt/conda/bin/conda install -c conda-forge jupyter-server-proxy

#RUN /opt/conda/bin/conda install -c conda-forge jupyter-vscode-proxy


#RUN pip install jupyterlab-visualpython

#RUN pip install jupyter-ai langchain-ollama


#add visual python related dependencies

#COPY requirements.txt .

#RUN pip install --no-cache-dir -r requirements.txt


#install data catalog extension

COPY fetchextension-0.1.0.tar.gz .

RUN pip install fetchextension-0.1.0.tar.gz


#COPY jupyter_jupyter_ai_config.json /etc/jupyter/jupyter_jupyter_ai_config.json

 

# Switch back to jovyan to avoid accidental container runs as root

USER ${NB_UID}
