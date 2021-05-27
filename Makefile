.PHONY: deploy
deploy:
	@vercel

.PHONY: alias
alias:
	@vercel --prod
