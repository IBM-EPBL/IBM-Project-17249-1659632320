import pickle

with open("feedback.txt", "rb") as f:
	success = pickle.load(f)
	total = pickle.load(f)
	print("Total Interactions = {}".format(total))
	print("Satifisfied = {}".format(success))
	print("CSAT = {}".format(success / total))
