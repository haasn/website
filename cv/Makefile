.PHONY: all clean

all: niklas_haas_cv.pdf

niklas_haas_cv.pdf: niklas_haas_cv.tex
	pdflatex niklas_haas_cv.tex
	@echo "PDF generated successfully!"

clean:
	rm -f *.aux *.log *.out *.pdf

view: niklas_haas_cv.pdf
	@if command -v xdg-open > /dev/null; then \
		xdg-open niklas_haas_cv.pdf; \
	elif command -v open > /dev/null; then \
		open niklas_haas_cv.pdf; \
	else \
		echo "Please open niklas_haas_cv.pdf manually"; \
	fi
