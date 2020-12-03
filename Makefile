.PHONY: build update run generate-deploy

export ENV = dev

ifeq (${ENV}, dev)
	export ENVFLAG = dev
 	export TAG = 2.1.1
 	export REGISTRY = harbor-register.entertech.cn/enter
else
	ifeq (${ENV}, release)
		export ENVFLAG = release
		export TAG = 1.0.0
		export REGISTRY = registry.cn-shanghai.aliyuncs.com/heartflow
	else
		$(error "Error: ENV(${ENV}) undefined.")
	endif
endif

_echo:
	@echo "Env: " ${ENVFLAG}
	@echo "Tag: " ${TAG}
	@echo "Registry: " ${REGISTRY}
	@echo "Path: " ${PWD}"/docker-compose-"${ENVFLAG}".yaml"

build: _echo
	docker-compose -f docker-compose-${ENVFLAG}.yaml build

update: build
	docker push ${REGISTRY}/ft-docs:${TAG}