.PHONY: build update

export VERSION = 0.1.0

ifeq (${REGION}, cn)
	export REGISTRY = registry.cn-shanghai.aliyuncs.com/heartflow
	export REPO = https://gitee.com/lockeysama/FTDocuments.git
	export BRANCH = master
else
	ifneq (${REGION}, us)
		$(error "Error: ENV(${ENV}) undefined.")
	endif
	
	export REGISTRY = 671277380155.dkr.ecr.us-west-2.amazonaws.com/flowtime
	export REPO = https://github.com/Entertech/FTDocuments.git
	export BRANCH = international
endif

ifeq (${ENV}, test)
	export ENVFLAG = -test
	export BUILD_VERSION = .0
else
	ifneq (${ENV}, release)
		$(error "Error: ENV(${ENV}) undefined.")
	endif
endif


_echo:
	@echo "Env: " ${ENV} "(" ${ENVFLAG} ")"
	@echo "Version: " ${VERSION}${BUILD_VERSION}
	@echo "Registry: " ${REGISTRY}
	@echo "Project: " && pwd
	@echo "Git Branch: " && git branch | grep "*" | awk '{print $2}'
	@read -p "按任意键继续..."

updatex: _echo
	docker buildx build --build-arg REPO=${REPO} --build-arg BRANCH=${BRANCH} --platform linux/amd64 --push -t ${REGISTRY}/meetflowtime-docs${ENVFLAG}:${VERSION}${BUILD_VERSION} .
